"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import styles from "./BlogDetail.module.scss";
import blogsData from "@/app/(components)/blogs/BlogsList.json";

export default function BlogDetail() {
  const params = useParams();
  const slug = params.slug;
  const blog = blogsData.find((b) => b.slug === slug);
  const [isFollowing, setIsFollowing] = useState(false);
  const [tableOfContents, setTableOfContents] = useState([]);
  const [isTocExpanded, setIsTocExpanded] = useState(true);
  const [activeHeadingId, setActiveHeadingId] = useState(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Extract headings from content to create table of contents
    const timer = setTimeout(() => {
      if (contentRef.current) {
        const headings = contentRef.current.querySelectorAll("h2, h3");
        
        if (headings.length === 0) {
          setTableOfContents([]);
          return;
        }
        
        // Create a map to ensure unique IDs
        const headingMap = new Map();
        const toc = Array.from(headings).map((heading, index) => {
          // Create a slug from the heading text for a more meaningful ID
          const text = heading.textContent.trim();
          const slug = text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '') || `heading-${index}`;
          
          let id = `heading-${slug}`;
          let counter = 1;
          
          // Ensure unique ID
          while (headingMap.has(id)) {
            id = `heading-${slug}-${counter}`;
            counter++;
          }
          headingMap.set(id, true);
          
          // Add ID to heading element (force set)
          heading.setAttribute('id', id);
          heading.id = id;
          
          // Add scroll-margin-top for better scroll positioning
          heading.style.scrollMarginTop = '150px';
          heading.style.scrollMarginBottom = '50px';
          
          return {
            id: id,
            text: text,
            level: heading.tagName.toLowerCase(),
          };
        });
        setTableOfContents(toc);
      }
    }, 600);

    return () => clearTimeout(timer);
  }, [blog]);

  // Scroll spy to detect active heading
  useEffect(() => {
    if (tableOfContents.length === 0) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!contentRef.current) {
            ticking = false;
            return;
          }

          const headings = contentRef.current.querySelectorAll("h2, h3");
          if (headings.length === 0) {
            ticking = false;
            return;
          }

          const offset = 200; // Offset for sticky header and padding
          let currentHeading = null;
          let lastPassedHeading = null;

          // Find the heading that's currently in the viewport
          for (let i = 0; i < headings.length; i++) {
            const heading = headings[i];
            const rect = heading.getBoundingClientRect();
            
            // Track the last heading we've scrolled past
            if (rect.top < offset) {
              lastPassedHeading = heading.id;
            }
            
            // If heading is currently visible near the top
            if (rect.top <= offset && rect.top >= 0) {
              currentHeading = heading.id;
              break;
            }
          }

          // Use the last passed heading if no heading is currently at the offset
          if (!currentHeading && lastPassedHeading) {
            currentHeading = lastPassedHeading;
          }

          // Set the first heading as active if we're at the very top
          if (!currentHeading && headings.length > 0) {
            const scrollY = window.scrollY || window.pageYOffset;
            if (scrollY < 300) {
              currentHeading = headings[0].id;
            } else if (lastPassedHeading) {
              currentHeading = lastPassedHeading;
            }
          }

          if (currentHeading && currentHeading !== activeHeadingId) {
            setActiveHeadingId(currentHeading);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check after headings are set up
    const initTimer = setTimeout(() => {
      // Set first heading as active initially
      if (tableOfContents.length > 0 && !activeHeadingId) {
        setActiveHeadingId(tableOfContents[0].id);
      }
      handleScroll();
    }, 800);

    // Add scroll listener with throttling
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      clearTimeout(initTimer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [blog, tableOfContents, activeHeadingId]);

  if (!blog) {
    notFound();
  }

  // Get related blogs (same category, excluding current)
  const relatedBlogs = blogsData
    .filter((b) => b.category === blog.category && b.id !== blog.id)
    .slice(0, 3);

  // Get recent blogs (excluding current)
  const recentBlogs = blogsData
    .filter((b) => b.id !== blog.id)
    .slice(0, 3);

  const handleShare = (platform) => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const text = blog.title;

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], "_blank", "width=600,height=400");
    }
  };

  const scrollToHeading = (id) => {
    // Try multiple methods to find the element
    let element = document.getElementById(id);
    
    // If not found by ID, try querySelector within content
    if (!element && contentRef.current) {
      element = contentRef.current.querySelector(`#${id}`);
    }
    
    // If still not found, try finding by matching text from TOC
    if (!element && contentRef.current) {
      const headings = contentRef.current.querySelectorAll("h2, h3");
      const tocItem = tableOfContents.find(item => item.id === id);
      if (tocItem) {
        Array.from(headings).forEach(heading => {
          if (heading.textContent.trim() === tocItem.text) {
            // Ensure it has the ID
            if (!heading.id) {
              heading.id = id;
              heading.setAttribute('id', id);
            }
            element = heading;
          }
        });
      }
    }
    
    if (element) {
      // Ensure element has the ID attribute
      if (!element.id || element.id !== id) {
        element.id = id;
        element.setAttribute('id', id);
      }
      
      // Calculate offset for sticky header and sidebar
      const offset = 20;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      // Scroll to the element
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth"
      });

      // Update active heading immediately
      setActiveHeadingId(id);
      
      // Also update after scroll completes to ensure it sticks
      setTimeout(() => {
        setActiveHeadingId(id);
        // Force a scroll check
        window.dispatchEvent(new Event('scroll'));
      }, 600);
    } else {
      console.warn(`Heading with id "${id}" not found. Available headings:`, 
        Array.from(contentRef.current?.querySelectorAll("h2, h3") || []).map(h => ({ id: h.id, text: h.textContent }))
      );
    }
  };

  // Calculate read time (assuming 200 words per minute)
  const wordCount = blog.content.replace(/<[^>]*>/g, "").split(/\s+/).length;
  const readTime = Math.ceil(wordCount / 200);

  return (
    <React.Fragment>
      <article className={styles.blog_detail}>
        {/* Header Section with Gradient */}
        <div className={styles.header_section}>
          <div className="container">
            {/* Breadcrumbs */}
            <nav className={styles.breadcrumbs}>
              <Link href="/blog">Blogs</Link>
              <span className={styles.breadcrumb_separator}>→</span>
              <Link href={`/blog?category=${blog.category}`}>{blog.category}</Link>
              <span className={styles.breadcrumb_separator}>→</span>
              <span className={styles.breadcrumb_current}>{blog.title}</span>
            </nav>

            {/* Title */}
            <h1 className={styles.blog_title}>{blog.title}</h1>

            {/* Metadata */}
            <div className={styles.metadata}>
              <div className={styles.meta_item}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <polyline points="12 6 12 12 16 14" stroke="currentColor" strokeWidth="2" />
                </svg>
                <span>Updated {blog.date}</span>
              </div>
              <div className={styles.meta_item}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="2" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="2" />
                </svg>
                <span>{readTime} Min</span>
              </div>
              <div className={styles.meta_item}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                </svg>
                <span>386 Views</span>
              </div>
            </div>

            {/* Author & Fact Checker */}
            <div className={styles.author_section}>
              <div className={styles.author_card}>
                <div className={styles.author_avatar}>
                  <div className={styles.avatar_placeholder}>
                    {blog.author.charAt(0)}
                  </div>
                </div>
                <div className={styles.author_info}>
                  <div className={styles.author_label}>Written By:</div>
                  <div className={styles.author_name}>{blog.author}</div>
                  <div className={styles.author_role}>Content Marketing Enthusiast</div>
                </div>
              </div>
              <div className={styles.author_card}>
                <div className={styles.author_avatar}>
                  <div className={styles.avatar_placeholder}>S</div>
                </div>
                <div className={styles.author_info}>
                  <div className={styles.author_label}>Facts Checked by:</div>
                  <div className={styles.author_name}>Sohaib</div>
                  <div className={styles.author_role}>Associate Digital Marketing Manager</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className={styles.content_layout}>
            {/* Left Sticky Sidebar - Follow & Share */}
            <aside className={styles.left_sidebar}>
              <div className={styles.sidebar_section}>
                <button
                  className={`${styles.follow_button} ${isFollowing ? styles.following : ""}`}
                  onClick={() => setIsFollowing(!isFollowing)}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  <span>Follow</span>
                </button>
              </div>
              <div className={styles.sidebar_section}>
                <div className={styles.share_label}>Share</div>
                <div className={styles.social_icons}>
                  <button
                    className={styles.social_icon}
                    onClick={() => handleShare("facebook")}
                    aria-label="Share on Facebook"
                  >
                    <span>f</span>
                  </button>
                  <button
                    className={styles.social_icon}
                    onClick={() => handleShare("linkedin")}
                    aria-label="Share on LinkedIn"
                  >
                    <span>in</span>
                  </button>
                  <button
                    className={styles.social_icon}
                    onClick={() => handleShare("twitter")}
                    aria-label="Share on Twitter"
                  >
                    <span>X</span>
                  </button>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className={styles.main_content}>
              {/* Featured Image */}
              <div className={styles.featured_image_wrapper}>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={1200}
                  height={600}
                  className={styles.featured_image}
                  priority
                />
              </div>

              {/* Blog Content */}
              <div className={styles.blog_content_wrapper} ref={contentRef}>
                <div
                  className={styles.blog_content}
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              </div>

              {/* About Author Section */}
              <div className={styles.about_author}>
                <div className={styles.author_avatar_large}>
                  <div className={styles.avatar_placeholder_large}>
                    {blog.author.charAt(0)}
                  </div>
                </div>
                <div className={styles.about_author_content}>
                  <div className={styles.about_author_name}>{blog.author}</div>
                  <p className={styles.about_author_description}>
                    A dedicated content marketing enthusiast with a keen eye for storytelling
                    and a passion for creating engaging, informative content that resonates
                    with audiences. With years of experience in digital marketing, {blog.author}
                    specializes in crafting compelling narratives that drive engagement and
                    deliver value to readers.
                  </p>
                  <div className={styles.author_social}>
                    <a href="#" className={styles.social_link} aria-label="Facebook">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Rate Article Section */}
              <div className={styles.rate_section}>
                <div className={styles.rate_content}>
                  <span className={styles.rate_count}>1989 rating, average: 4.5 out of 5</span>
                  <div className={styles.stars}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill={star <= 4 ? "#FFD700" : star === 5 ? "none" : "none"}
                        stroke={star === 5 ? "#FFD700" : "none"}
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </main>

            {/* Right Sticky Sidebar - Table of Contents */}
            <aside className={styles.right_sidebar}>
              <div className={styles.toc_section}>
                <button
                  className={styles.toc_header}
                  onClick={() => setIsTocExpanded(!isTocExpanded)}
                  aria-expanded={isTocExpanded}
                  aria-label="Toggle table of contents"
                >
                  <h3>In this article</h3>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`${styles.toc_arrow} ${isTocExpanded ? styles.expanded : ""}`}
                  >
                    <polyline points="18 15 12 9 6 15" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </button>
                <nav
                  className={`${styles.toc_list} ${isTocExpanded ? styles.expanded : styles.collapsed}`}
                >
                  {tableOfContents.length > 0 ? (
                    tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`${styles.toc_item} ${item.level === "h3" ? styles.toc_subitem : ""} ${
                          activeHeadingId === item.id ? styles.active : ""
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToHeading(item.id);
                          // Update active heading immediately when clicked
                          setActiveHeadingId(item.id);
                        }}
                      >
                        {item.text}
                      </a>
                    ))
                  ) : (
                    <p className={styles.toc_empty}>No headings found</p>
                  )}
                </nav>
              </div>

              {/* CTA Section */}
              <div className={styles.cta_section}>
                <h4 className={styles.cta_title}>Custom App Development</h4>
                <Link href="/contact-us" className={styles.cta_button}>
                  Contact Us
                </Link>
              </div>

              {/* Branding Section */}
              <div className={styles.branding_section}>
                <div className={styles.brand_logo}>DEVTRIOS</div>
                <p className={styles.brand_description}>
                  Founded in 2010, Devtrios is a tech company delivering ISO 9001-certified
                  digital solutions.
                </p>
                <Link href="/about-us" className={styles.read_more_link}>
                  Read More
                </Link>
              </div>
            </aside>
          </div>

          {/* Related Blogs */}
          {relatedBlogs.length > 0 && (
            <section className={styles.related_blogs}>
              <h2 className={styles.section_title}>Related Blogs</h2>
              <div className={styles.related_grid}>
                {relatedBlogs.map((relatedBlog) => (
                  <Link
                    key={relatedBlog.id}
                    href={`/blog/${relatedBlog.slug}`}
                    className={styles.related_card}
                  >
                    <div className={styles.related_image_wrapper}>
                      <Image
                        src={relatedBlog.image}
                        alt={relatedBlog.title}
                        width={400}
                        height={250}
                        className={styles.related_image}
                      />
                    </div>
                    <div className={styles.related_content}>
                      <span className={styles.related_category}>
                        {relatedBlog.category}
                      </span>
                      <h3 className={styles.related_card_title}>
                        {relatedBlog.title}
                      </h3>
                      <p className={styles.related_excerpt}>
                        {relatedBlog.excerpt}
                      </p>
                      <div className={styles.related_meta}>
                        <span>By {relatedBlog.author} | {relatedBlog.date}</span>
                        <span className={styles.read_more_link}>Read More →</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Recent Blogs */}
          {recentBlogs.length > 0 && (
            <section className={styles.recent_blogs}>
              <h2 className={styles.section_title}>Recent Blogs</h2>
              <div className={styles.related_grid}>
                {recentBlogs.map((recentBlog) => (
                  <Link
                    key={recentBlog.id}
                    href={`/blog/${recentBlog.slug}`}
                    className={styles.related_card}
                  >
                    <div className={styles.related_image_wrapper}>
                      <Image
                        src={recentBlog.image}
                        alt={recentBlog.title}
                        width={400}
                        height={250}
                        className={styles.related_image}
                      />
                    </div>
                    <div className={styles.related_content}>
                      <span className={styles.related_category}>
                        {recentBlog.category}
                      </span>
                      <h3 className={styles.related_card_title}>
                        {recentBlog.title}
                      </h3>
                      <p className={styles.related_excerpt}>
                        {recentBlog.excerpt}
                      </p>
                      <div className={styles.related_meta}>
                        <span>By {recentBlog.author} | {recentBlog.date}</span>
                        <span className={styles.read_more_link}>Read More →</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </React.Fragment>
  );
}

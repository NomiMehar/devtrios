"use client";

import React, { useState, useMemo } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import CustomBanner from "@/app/(components)/custom-banner/CustomBanner";
import bannerData from "@/app/(components)/custom-banner/CustomBannerList.json";
import styles from "./BlogPage.module.scss";
import blogsData from "@/app/(components)/blogs/BlogsList.json";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  // Get unique categories (excluding "All")
  const categories = useMemo(() => {
    const cats = [...new Set(blogsData.map((blog) => blog.category))];
    return cats;
  }, []);

  // Filter blogs based on category and search
  const filteredBlogs = useMemo(() => {
    return blogsData.filter((blog) => {
      const matchesCategory =
        selectedCategory === "All" || blog.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Separate main blogs (non-statistical)
  const mainBlogs = filteredBlogs.filter((blog) => blog);
  
  // Pagination calculations
  const totalPages = Math.ceil(mainBlogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const displayedBlogs = mainBlogs.slice(startIndex, endIndex);

  // Get one recent blog from each category for Statistical Blogs (ALL categories, not just statistical)
  const statisticalBlogsByCategory = useMemo(() => {
    const categoryMap = new Map();
    blogsData
      .sort((a, b) => {
        // Parse dates like "Dec 23, 2025"
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA; // Sort descending (newest first)
      })
      .forEach((blog) => {
        if (!categoryMap.has(blog.category)) {
          categoryMap.set(blog.category, blog);
        }
      });
    return Array.from(categoryMap.values());
  }, []);

  // Reset to page 1 when filter changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  // Pagination helper functions
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      // Show all pages if total is less than max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      if (currentPage > 3) {
        pages.push('ellipsis-start');
      }
      
      // Show pages around current page
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = start; i <= end; i++) {
        if (i !== 1 && i !== totalPages) {
          pages.push(i);
        }
      }
      
      if (currentPage < totalPages - 2) {
        pages.push('ellipsis-end');
      }
      
      // Always show last page
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const customBannerData = bannerData.blog || {
    title: "Our Blog",
    description: "Stay updated with the latest insights, trends, and expert advice on web development, mobile apps, and digital marketing.",
    buttons: [],
    background: "#243a72"
  };

  return (
    <React.Fragment>
      <Head>
        <title>Blog | Devtrios - Latest Articles and Insights</title>
        <meta
          name="description"
          content="Read our latest blog posts about web development, app development, software development, and digital marketing insights."
        />
        <link rel="canonical" href="https://devtrios.com/blog/" />
      </Head>
      
      <CustomBanner
        title={customBannerData.title}
        description={customBannerData.description}
        buttons={customBannerData.buttons}
        background={customBannerData.background}
      />

      <section className={styles.blog_page}>
        <div className="container">
          {/* Header Section */}
          <div className={styles.header}>
            <div className={styles.header_center}>
              <div className={styles.category_tabs}>
                <button
                  className={`${styles.category_tab} ${
                    selectedCategory === "All" ? styles.active : ""
                  }`}
                  onClick={() => setSelectedCategory("All")}
                >
                  All
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`${styles.category_tab} ${
                      selectedCategory === category ? styles.active : ""
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div className={styles.header_right}>
              <div className={styles.search_bar}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className={styles.main_content}>
            {/* Left Section - Main Blog Cards */}
            <div className={styles.left_section}>
              <div className={styles.blog_grid}>
                {displayedBlogs.length > 0 ? (
                  displayedBlogs.map((blog) => (
                    <article key={blog.id} className={styles.blog_card}>
                      <Link href={`/blog/${blog.slug}`} className={styles.card_link}>
                        <div className={styles.imageWrapper}>
                          <Image
                            src={blog.image}
                            alt={blog.title}
                            width={600}
                            height={400}
                            className={styles.card_image}
                          />
                        </div>
                        <div className={styles.card_content}>
                          {blog.category && (
                            <span className={styles.category}>{blog.category}</span>
                          )}
                          <h2 className={styles.title}>{blog.title}</h2>
                          <p className={styles.description}>
                            {blog.description}
                          </p>
                          <div className={styles.card_footer}>
                            <span className={styles.card_meta}>
                              By {blog.author} | {blog.date}
                            </span>
                            <span className={styles.read_more}>
                              Read More →
                            </span>
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))
                ) : (
                  <div className={styles.no_results}>
                    <p>No blogs found matching your criteria.</p>
                  </div>
                )}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className={styles.pagination_wrapper}>
                  <div className={styles.pagination}>
                    <button
                      className={styles.pagination_button}
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      aria-label="Previous page"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M15 18L9 12L15 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    {getPageNumbers().map((page, index) => {
                      if (page === 'ellipsis-start' || page === 'ellipsis-end') {
                        return (
                          <span key={`ellipsis-${index}`} className={styles.pagination_ellipsis}>
                            ...
                          </span>
                        );
                      }
                      return (
                        <button
                          key={page}
                          className={`${styles.pagination_button} ${styles.pagination_number} ${
                            currentPage === page ? styles.active : ""
                          }`}
                          onClick={() => handlePageChange(page)}
                        >
                          {page}
                        </button>
                      );
                    })}

                    <button
                      className={styles.pagination_button}
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      aria-label="Next page"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M9 18L15 12L9 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right Section - Statistical Blogs Sidebar */}
            {statisticalBlogsByCategory.length > 0 && (
              <div className={styles.right_section}>
                <h3 className={styles.sidebar_title}>Statistical Blogs</h3>
                <div className={styles.statistical_blogs_list}>
                  {statisticalBlogsByCategory.map((blog) => (
                    <Link
                      key={blog.id}
                      href={`/blog/${blog.slug}`}
                      className={styles.statistical_blog_item}
                    >
                      <div className={styles.statistical_image_wrapper}>
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          width={160}
                          height={85}
                          className={styles.statistical_image}
                        />
                      </div>
                      <div className={styles.statistical_content}>
                        <span className={styles.statistical_category}>
                          {blog.category}
                        </span>
                        <h4 className={styles.statistical_title}>
                          {blog.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

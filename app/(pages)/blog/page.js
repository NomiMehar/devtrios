"use client";

import React, { useState, useMemo, useEffect } from "react";
import Head from "next/head";
import BlogHeader from "@/app/(components)/blog-list/BlogHeader";
import BlogGrid from "@/app/(components)/blog-list/BlogGrid";
import BlogPagination from "@/app/(components)/blog-list/BlogPagination";
import StatisticalBlogsSidebar from "@/app/(components)/blog-list/StatisticalBlogsSidebar";
import styles from "./BlogPage.module.scss";
import blogsData from "@/app/(components)/blogs-slider/BlogsSliderList.json";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  // Get unique categories
  const categories = useMemo(() => {
    return [...new Set(blogsData.map((blog) => blog.category))];
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

  // Pagination calculations
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const displayedBlogs = filteredBlogs.slice(startIndex, endIndex);

  // Get one recent blog from each category for Statistical Blogs
  const statisticalBlogsByCategory = useMemo(() => {
    const categoryMap = new Map();
    blogsData
      .sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      })
      .forEach((blog) => {
        if (!categoryMap.has(blog.category)) {
          categoryMap.set(blog.category, blog);
        }
      });
    return Array.from(categoryMap.values());
  }, []);

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

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
      
      <BlogHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <section className={styles.blog_page}>
        <div className="container">
          <div className={styles.category_tabs_wrapper}>
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

          <div className={styles.main_content}>
            <div className={styles.left_section}>
              <BlogGrid blogs={displayedBlogs} />
              <BlogPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>

            <StatisticalBlogsSidebar blogs={statisticalBlogsByCategory} />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

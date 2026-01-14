"use client";

import React from "react";
import BlogCard from "./BlogCard";
import styles from "./BlogGrid.module.scss";

export default function BlogGrid({ blogs }) {
  if (blogs.length === 0) {
    return (
      <div className={styles.no_results}>
        <p>No blogs found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className={styles.blog_grid}>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}


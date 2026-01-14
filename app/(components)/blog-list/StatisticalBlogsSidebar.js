"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./StatisticalBlogsSidebar.module.scss";

export default function StatisticalBlogsSidebar({ blogs }) {
  if (blogs.length === 0) return null;

  return (
    <div className={styles.right_section}>
      <h3 className={styles.sidebar_title}>Statistical Blogs</h3>
      <div className={styles.statistical_blogs_list}>
        {blogs.map((blog) => (
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
              <h4 className={styles.statistical_title}>{blog.title}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}


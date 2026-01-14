"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./BlogCard.module.scss";

export default function BlogCard({ blog }) {
  return (
    <article className={styles.blog_card}>
      <Link href={`/blog/${blog.slug}`} className={styles.card_link}>
        <div className={styles.imageWrapper}>
          <Image
            src={blog.image}
            alt={blog.title}
            width={600}
            height={400}
            className={styles.card_image}
          />
          {blog.category && (
            <span className={styles.category_badge}>{blog.category}</span>
          )}
        </div>
        <div className={styles.card_content}>
          <h2 className={styles.title}>{blog.title}</h2>
          <p className={styles.description}>{blog.description}</p>
          <div className={styles.card_footer}>
            <span className={styles.card_meta}>
              By {blog.author} | {blog.date}
            </span>
            <span className={styles.read_more}>Read More →</span>
          </div>
        </div>
      </Link>
    </article>
  );
}


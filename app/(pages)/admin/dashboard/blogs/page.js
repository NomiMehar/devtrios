"use client";

import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "./BlogsManagement.module.scss";

export default function BlogsManagement() {
  return (
    <React.Fragment>
      <Head>
        <title>Blog Management | Admin Dashboard</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className={styles.blogs_management}>
        <div className="container">
          <div className={styles.page_header}>
            <Link href="/admin/dashboard" className={styles.back_link}>
              ← Back to Dashboard
            </Link>
            <div className={styles.header_content}>
              <h1>Blog Management</h1>
              <Link href="/admin/dashboard/blogs/new" className={styles.new_button}>
                + New Blog
              </Link>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.info_message}>
              <h2>Coming Soon</h2>
              <p>
                Blog management functionality will be implemented in the future.
                This will allow you to:
              </p>
              <ul>
                <li>View all blogs in a table/list format</li>
                <li>Add new blog posts</li>
                <li>Edit existing blog posts</li>
                <li>Delete blog posts</li>
                <li>Upload and manage images</li>
                <li>Manage categories</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}


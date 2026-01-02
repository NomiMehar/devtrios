"use client";

import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "./Dashboard.module.scss";

export default function AdminDashboard() {
  return (
    <React.Fragment>
      <Head>
        <title>Admin Dashboard | Devtrios</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className={styles.dashboard}>
        <div className="container">
          <div className={styles.dashboard_header}>
            <h1>Admin Dashboard</h1>
            <p>Manage your blog content</p>
          </div>
          <div className={styles.dashboard_content}>
            <div className={styles.info_card}>
              <h2>Coming Soon</h2>
              <p>
                The admin dashboard functionality will be implemented in the
                future. This will include:
              </p>
              <ul>
                <li>Blog management (Add, Edit, Delete)</li>
                <li>Category management</li>
                <li>Image upload functionality</li>
                <li>Rich text editor for blog content</li>
                <li>User authentication and authorization</li>
              </ul>
              <div className={styles.actions}>
                <Link href="/admin/dashboard/blogs" className={styles.action_button}>
                  Manage Blogs (Coming Soon)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}


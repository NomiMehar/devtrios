"use client";

import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import styles from "./Login.module.scss";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // TODO: Implement authentication logic
    // For now, this is a placeholder
    setTimeout(() => {
      setLoading(false);
      // router.push("/admin/dashboard");
      setError("Login functionality will be implemented in the future");
    }, 1000);
  };

  return (
    <React.Fragment>
      <Head>
        <title>Admin Login | Devtrios</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className={styles.login_page}>
        <div className={styles.login_container}>
          <div className={styles.login_header}>
            <h1>Admin Login</h1>
            <p>Sign in to manage blog content</p>
          </div>
          <form onSubmit={handleSubmit} className={styles.login_form}>
            {error && <div className={styles.error_message}>{error}</div>}
            <div className={styles.form_group}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="admin@devtrios.com"
              />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className={styles.submit_button}
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
          <div className={styles.login_footer}>
            <p>This feature will be implemented in the future</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}


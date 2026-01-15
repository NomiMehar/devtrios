"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./WebsiteContactForm.module.scss";
import buttonStyles from "@/app/(components)/button/Button.module.scss";

export default function WebsiteContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    number: "",
    projectNeed: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section className={styles.website_contact_form}>
      <div className="container">
        <div className={styles.contact_wrapper}>
          {/* Left Column */}
          <div className={styles.left_column}>
            <div className={styles.content}>
              <h2>Let's Get Started with Website Development</h2>
              <p className={styles.intro_text}>
                Let us know more about your project. We'll review your requirements and get back to you with a free estimation call.
              </p>

              {/* Rating Badges */}
              <div className={styles.rating_badges}>
                <Link
                  href="https://clutch.co/profile/devtrios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.rating_badge}
                >
                  <Image
                    src="/assets/images/footer/clutch.svg"
                    alt="Clutch"
                    width={80}
                    height={80}
                  />
                  <div className={styles.rating_info}>
                    <span className={styles.rating_name}>Clutch</span>
                    <span className={styles.rating_value}>5.0</span>
                  </div>
                </Link>
                <Link
                  href="https://www.yell.com/biz/devtrios-london-10964943/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.rating_badge}
                >
                  <Image
                    src="/assets/images/footer/yell.jpg"
                    alt="Yell"
                    width={80}
                    height={80}
                  />
                  <div className={styles.rating_info}>
                    <span className={styles.rating_name}>Yell</span>
                    <span className={styles.rating_value}>5.0</span>
                  </div>
                </Link>
                <Link
                  href="https://share.google/jRbwJljEwaDqE5dxc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.rating_badge}
                >
                  <div className={styles.google_logo}>
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                  <div className={styles.rating_info}>
                    <span className={styles.rating_name}>Google</span>
                    <span className={styles.rating_value}>5.0</span>
                  </div>
                </Link>
              </div>

              {/* Contact Info */}
              <div className={styles.contact_info}>
                <h4>Contact Info:</h4>
                <div className={styles.contact_item}>
                  <Image
                    src="/assets/images/footer/mail.svg"
                    alt="Email"
                    width={20}
                    height={20}
                  />
                  <Link href="mailto:info@devtrios.com">info@devtrios.com</Link>
                </div>
                <div className={styles.contact_item}>
                  <Image
                    src="/assets/images/footer/phone.svg"
                    alt="Phone"
                    width={20}
                    height={20}
                  />
                  <Link href="tel:+447470801776">+44-7470 801776</Link>
                </div>
                <div className={styles.contact_item}>
                  <Image
                    src="/assets/images/footer/location.svg"
                    alt="Address"
                    width={20}
                    height={20}
                  />
                  <span>27 Old Gloucester Street, London WC1N 3AX, United Kingdom</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className={styles.right_column}>
            <div className={styles.form_container}>
              <h3>Get in Touch Now!</h3>
              <form onSubmit={handleSubmit} className={styles.contact_form}>
                <div className={styles.form_group}>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                  />
                </div>

                <div className={styles.form_group}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                  />
                </div>

                <div className={styles.form_group}>
                  <input
                    type="tel"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    placeholder="Number"
                    required
                  />
                </div>

                <div className={styles.form_group}>
                  <textarea
                    name="projectNeed"
                    value={formData.projectNeed}
                    onChange={handleChange}
                    placeholder="Describe Your Project Need."
                    rows={4}
                    required
                  ></textarea>
                </div>

                <p className={styles.privacy_text}>
                  By submitting this form, you agree to our{" "}
                  <Link href="/privacy">Privacy Policy</Link>
                </p>

                <button type="submit" className={`${buttonStyles.button_wrapper} ${styles.submit_button}`}>
                  Get In Touch
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


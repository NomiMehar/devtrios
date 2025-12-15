"use client";

import React from "react";
import styles from "./ContactInfoForm.module.scss";
import Link from "next/link";
import Image from "next/image";
import ContactInfoData from "./ContactInfoFormList.json";

export default function ContactInfoForm({ noPadding = false }) {
  const {
    contactHeading,
    contactDetails,
    socialLinks,
    businessTypes,
    projectTypes,
    budgetOptions,
    referralSources,
  } = ContactInfoData;

  return (
    <React.Fragment>
      <div
        className={`${styles.contact_info_form} ${
          noPadding ? styles.no_padding_bottom : ""
        }`}
      >
        <div className="container">
          <div className={styles.contact_wrapper}>
            {/* LEFT SIDE INFO */}
            <div className={styles.info}>
              <div className={styles.heading}>
                <h2>{contactHeading.title}</h2>
                <p>{contactHeading.description}</p>
              </div>

              <div className={styles.social_info}>
                {/* CONTACT DETAILS */}
                <div className={styles.address_info}>
                  <Link href={`mailto:${contactDetails.email}`}>
                    {contactDetails.email}
                  </Link>
                  <Link href={`tel:${contactDetails.phone}`}>
                    {contactDetails.phone}
                  </Link>
                  <Link
                    href={contactDetails.address.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contactDetails.address.label}
                  </Link>
                </div>

                {/* SOCIAL ICONS */}
                <div className={styles.social_icons}>
                  {socialLinks.map((item, index) => (
                    <Link
                      key={index}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialIcon}
                    >
                      <Image
                        src={item.icon}
                        alt={item.name}
                        width={1000}
                        height={1000}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className={styles.form_info}>
              <div className={styles.form}>
                {/* Full Name + Email */}
                <div className={styles.form_row}>
                  <div className={styles.floating_group}>
                    <input type="text" placeholder=" " required />
                    <label>Full Name</label>
                  </div>

                  <div className={styles.floating_group}>
                    <input type="email" placeholder=" " required />
                    <label>Email</label>
                  </div>
                </div>

                {/* Phone + Company */}
                <div className={styles.form_row}>
                  <div className={styles.floating_group}>
                    <input type="text" placeholder=" " required />
                    <label>Phone No.</label>
                  </div>

                  <div className={styles.floating_group}>
                    <input type="text" placeholder=" " />
                    <label>Company Name</label>
                  </div>
                </div>

                {/* Business Type + Project Type */}
                <div className={styles.form_row}>
                  <div className={styles.floating_group}>
                    <select required>
                      <option value=""></option>
                      {businessTypes.map((type, index) => (
                        <option key={index}>{type}</option>
                      ))}
                    </select>
                    <label>Business Type</label>
                  </div>

                  <div className={styles.floating_group}>
                    <select required>
                      <option value=""></option>
                      {projectTypes.map((type, index) => (
                        <option key={index}>{type}</option>
                      ))}
                    </select>
                    <label>Project Type</label>
                  </div>
                </div>

                {/* Budget + Referral */}
                <div className={styles.form_row}>
                  <div className={styles.floating_group}>
                    <select>
                      <option value=""></option>
                      {budgetOptions.map((item, index) => (
                        <option key={index}>{item}</option>
                      ))}
                    </select>
                    <label>Budget (Optional)</label>
                  </div>

                  <div className={styles.floating_group}>
                    <select>
                      <option value=""></option>
                      {referralSources.map((item, index) => (
                        <option key={index}>{item}</option>
                      ))}
                    </select>
                    <label>How did you hear about us?</label>
                  </div>
                </div>

                {/* About Project */}
                <div className={styles.floating_group}>
                  <textarea placeholder=" " required></textarea>
                  <label>About Project</label>
                </div>

                {/* Terms & Policy */}
                <div className={styles.checkbox_row}>
                  <input type="checkbox" id="agree" required />
                  <label htmlFor="agree">
                    I agree to the processing of my details as described in the{" "}
                    <Link href="/privacy-policy">Privacy Policy</Link>.
                  </label>
                </div>

                <button className={styles.submit_btn}>
                  Start the Conversation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

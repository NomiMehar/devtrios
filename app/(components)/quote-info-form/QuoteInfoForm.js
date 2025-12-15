"use client";

import React, { useRef, useState } from "react";
import styles from "./QuoteInfoForm.module.scss";
import Link from "next/link";
import Image from "next/image";
import ContactInfoData from "./QuoteInfoFormList.json";

export default function QuoteInfoForm() {
  const {
    projectDuration,
    projectTypes,
    budgetOptions,
    timeline,
    referralSources,
  } = ContactInfoData;

  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleFilled = (e) => {
    const wrapper = e.target.closest(`.${styles.floating_group}`);
    if (!wrapper) return;

    if (e.target.value && e.target.value !== "") {
      wrapper.classList.add(styles.filled);
    } else {
      wrapper.classList.remove(styles.filled);
    }
  };

  return (
    <React.Fragment>
      <div className={styles.quote_info_form}>
        <div className="container">
          <div className={styles.quote_wrapper}>
            <div className={styles.form_info}>
              <div className={styles.form}>
                {/* Full Name + Email */}
                <h3>Your Details</h3>
                <div className={styles.form_row}>
                  <div className={styles.floating_group}>
                    <input
                      onBlur={handleFilled}
                      onChange={handleFilled}
                      type="email"
                      placeholder=" "
                      required
                    />
                    <label>Email*</label>
                  </div>
                  <div className={styles.floating_group}>
                    <input
                      onBlur={handleFilled}
                      onChange={handleFilled}
                      type="text"
                      placeholder=" "
                      required
                    />
                    <label>Full Name*</label>
                  </div>
                </div>

                {/* Phone + Company */}
                <div className={styles.form_row}>
                  <div className={styles.floating_group}>
                    <input
                      onBlur={handleFilled}
                      onChange={handleFilled}
                      type="text"
                      placeholder=" "
                    />
                    <label>Company Name</label>
                  </div>
                  <div className={styles.floating_group}>
                    <input
                      onBlur={handleFilled}
                      onChange={handleFilled}
                      type="text"
                      placeholder=" "
                      required
                    />
                    <label>Your Location</label>
                  </div>
                </div>
                <h3>Project Details</h3>
                {/* Project Duration + Project Type */}
                <div className={styles.form_row}>
                  <div className={styles.floating_group}>
                    <select onChange={handleFilled} required>
                      <option value=""></option>
                      {projectTypes.map((type, index) => (
                        <option key={index}>{type}</option>
                      ))}
                    </select>
                    <label>Project Type</label>
                  </div>
                  <div className={styles.floating_group}>
                    <select onChange={handleFilled} required>
                      <option value=""></option>
                      {projectDuration.map((type, index) => (
                        <option key={index}>{type}</option>
                      ))}
                    </select>
                    <label>Project Duration</label>
                  </div>
                </div>

                {/* Budget + Referral */}
                <div className={styles.form_row}>
                  <div className={styles.floating_group}>
                    <select onChange={handleFilled}>
                      <option value=""></option>
                      {budgetOptions.map((item, index) => (
                        <option key={index}>{item}</option>
                      ))}
                    </select>
                    <label>Estimated Budget</label>
                  </div>

                  <div className={styles.floating_group}>
                    <select onChange={handleFilled}>
                      <option value=""></option>
                      {timeline.map((item, index) => (
                        <option key={index}>{item}</option>
                      ))}
                    </select>
                    <label>Timeline</label>
                  </div>
                </div>

                <div className={styles.form_row}>
                  <div className={styles.floating_group}>
                    <select onChange={handleFilled}>
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
                  <textarea
                    onChange={handleFilled}
                    placeholder=" "
                    required
                  ></textarea>
                  <label>About Project</label>
                </div>
                <>
                  {/* Hidden input */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx,.zip"
                    onChange={handleFileChange}
                    hidden
                  />

                  {/* Upload UI */}
                  <div
                    className={styles.attach_brief}
                    onClick={handleClick}
                    role="button"
                    tabIndex={0}
                  >
                    <Image
                      src="/assets/images/icons/attach_brief.svg"
                      width={1000}
                      height={1000}
                      alt="attachment_icon"
                    />

                    <p>{fileName || "Attach Brief / RFP"}</p>
                    <span>
                      {fileName
                        ? "File selected"
                        : "PDF, DOCX, ZIP – max 10 MB"}
                    </span>
                  </div>
                </>
                {/* Terms & Policy */}
                <div className={styles.checkbox_row}>
                  <input type="checkbox" id="agree" required />
                  <label htmlFor="agree">
                    I consent to my details being used to respond to this
                    inquiry
                    <Link href="/privacy-policy"> (see Privacy Policy)</Link>.
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

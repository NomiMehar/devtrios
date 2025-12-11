import React from "react";
import styles from "./ContactInfoForm.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function ContactInfoForm() {
  return (
    <React.Fragment>
      <div className={styles.contact_info_form}>
        <div className="container">
          <div className={styles.contact_wrapper}>
            <div className={styles.info}>
              <div className={styles.heading}>
                <h2>Contact Information</h2>
                <p>
                  Reach out to us through the form or directly via email, phone,
                  or our London HQ. Contact Devtrios to learn how we also serve
                  clients across Europe, the USA, and GCC.
                </p>
              </div>
              <div className={styles.social_info}>
                <div className={styles.address_info}>
                  <Link href="mailto:info@devtrios.com">info@devtrios.com</Link>
                  <Link href="tel:+447470801776">+447470801776</Link>
                  <Link
                    href="https://share.google/fZ0HyIrDSQPIuJNUR"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    27 Old Gloucester Street, London WC1N 3AX, United Kingdom
                  </Link>
                </div>
                <div className={styles.social_icons}>
                  <Link
                    href="https://www.facebook.com/share/1BXgdxNpBu/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                  >
                    <Image
                      src="/assets/images/footer/facebook.svg"
                      alt="icon"
                      width={1000}
                      height={1000}
                    />
                  </Link>
                  <Link
                    href="https://x.com/devtrios_uk?s=21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                  >
                    <Image
                      src="/assets/images/footer/twitter.svg"
                      alt="icon"
                      width={1000}
                      height={1000}
                    />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/devtrios/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                  >
                    <Image
                      src="/assets/images/footer/linkedin.svg"
                      alt="icon"
                      width={1000}
                      height={1000}
                    />
                  </Link>
                  <Link
                    href="https://youtube.com/@devtrios?si=UgLlfm3ra99HDqY8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                  >
                    <Image
                      src="/assets/images/footer/youtube.svg"
                      alt="icon"
                      width={1000}
                      height={1000}
                    />
                  </Link>
                  <Link
                    href="https://www.instagram.com/devtrios_uk?igsh=eWJmbXNwaWRodGZy&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                  >
                    <Image
                      src="/assets/images/footer/instagram.svg"
                      alt="icon"
                      width={1000}
                      height={1000}
                    />
                  </Link>
                  <Link
                    href="https://uk.pinterest.com/devtrios/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                  >
                    <Image
                      src="/assets/images/footer/pinterest.svg"
                      alt="icon"
                      width={1000}
                      height={1000}
                    />
                  </Link>
                  <Link
                    href="https://www.tiktok.com/@devtrios_uk?_t=ZG-8zlgpW9o1kv&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                  >
                    <Image
                      src="/assets/images/footer/tiktok.svg"
                      alt="icon"
                      width={1000}
                      height={1000}
                    />
                  </Link>
                  <Link
                    href="https://x.com/devtrios_uk?s=21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                  >
                    <Image
                      src="/assets/images/footer/x.svg"
                      alt="icon"
                      width={1000}
                      height={1000}
                    />
                  </Link>
                </div>
              </div>
            </div>
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
                      <option>Technology / SaaS</option>
                      <option>E-commerce / Retail</option>
                      <option>Healthcare / Wellness</option>
                      <option>Finance / Fintech</option>
                      <option>Education / eLearning</option>
                      <option>Real Estate / Property</option>
                      <option>Hospitality / Travel</option>
                      <option>Media / Entertainment</option>
                      <option>Nonprofit / NGO</option>
                    </select>
                    <label>Business Type</label>
                  </div>

                  <div className={styles.floating_group}>
                    <select required>
                      <option value=""></option>
                      <option>Website Design & Development</option>
                      <option>Mobile App Development</option>
                      <option>Custom Software / SaaS</option>
                      <option>AI / Automation</option>
                      <option>SEO & Digital Marketing</option>
                      <option>Cloud / Hosting / DevOps</option>
                      <option>Consultation Only</option>
                      <option>Other</option>
                    </select>
                    <label>Project Type</label>
                  </div>
                </div>

                {/* Budget + Referral */}
                <div className={styles.form_row}>
                  <div className={styles.floating_group}>
                    <select>
                      <option value=""></option>
                      <option>&lt; £5,000</option>
                      <option>£5,000 – £15,000</option>
                      <option>£15,000 – £50,000</option>
                      <option>£50,000 – £150,000</option>
                      <option>£150,000+</option>
                    </select>
                    <label>Budget (Optional)</label>
                  </div>

                  <div className={styles.floating_group}>
                    <select>
                      <option value=""></option>
                      <option>Google Search</option>
                      <option>LinkedIn</option>
                      <option>Referral</option>
                      <option>Social Media</option>
                      <option>Returning Client</option>
                    </select>
                    <label>How did you hear about us?</label>
                  </div>
                </div>

                {/* About Project */}
                <div className={styles.floating_group}>
                  <textarea placeholder=" " required></textarea>
                  <label>About Project</label>
                </div>

                {/* Terms */}
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

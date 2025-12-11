import React from "react";
import styles from "./ContactInfoForm.module.scss";
import Link from "next/link";

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
                <Link
                  href="mailto:info@devtrios.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  info@devtrios.com
                </Link>
                <Link
                  href="tel:+447470801776"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +447470801776
                </Link>
                <Link
                  href="https://share.google/fZ0HyIrDSQPIuJNUR"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  27 Old Gloucester Street, London WC1N 3AX, United Kingdom
                </Link>
                <div className={styles.social_icons}>
                  <Link
                    href="https://www.facebook.com/share/1BXgdxNpBu/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                  >
                    <Image
                      src="/assets/images/footer/facebook.svg"
                      alt={item.name}
                      width={1000}
                      height={1000}
                    />
                  </Link>
                  <Link
                    href="https://www.facebook.com/share/1BXgdxNpBu/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                  >
                    <Image
                      src="/assets/images/footer/facebook.svg"
                      alt={item.name}
                      width={1000}
                      height={1000}
                    />
                  </Link>
                  <Link
                    href="https://www.facebook.com/share/1BXgdxNpBu/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                  >
                    <Image
                      src="/assets/images/footer/facebook.svg"
                      alt={item.name}
                      width={1000}
                      height={1000}
                    />
                  </Link>
                  <Link
                    href="https://www.facebook.com/share/1BXgdxNpBu/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                  >
                    <Image
                      src="/assets/images/footer/facebook.svg"
                      alt={item.name}
                      width={1000}
                      height={1000}
                    />
                  </Link>
                  <Link
                    href="https://www.facebook.com/share/1BXgdxNpBu/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                  >
                    <Image
                      src="/assets/images/footer/facebook.svg"
                      alt={item.name}
                      width={1000}
                      height={1000}
                    />
                  </Link>
                  <Link
                    href="https://www.facebook.com/share/1BXgdxNpBu/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                  >
                    <Image
                      src="/assets/images/footer/facebook.svg"
                      alt={item.name}
                      width={1000}
                      height={1000}
                    />
                  </Link>
                  <Link
                    href="https://www.facebook.com/share/1BXgdxNpBu/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                  >
                    <Image
                      src="/assets/images/footer/facebook.svg"
                      alt={item.name}
                      width={1000}
                      height={1000}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.form_info}></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

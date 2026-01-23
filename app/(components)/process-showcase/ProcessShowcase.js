"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./ProcessShowcase.module.scss";

export default function ProcessShowcase({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!data) return null;

  const { title, description, items, closingText } = data;
  const activeItem = items[activeIndex];

  return (
    <section className={styles.process_showcase}>
      <div className="container">
        <div className={styles.content_wrapper}>
          {/* Left Content */}
          <div className={styles.left_content}>
            <div className={styles.heading_wrapper}>
              <h2>{title}</h2>
              {description && <p>{description}</p>}
            </div>

            <ul className={styles.items_list}>
              {items.map((item, index) => (
                <li
                  key={index}
                  className={`${styles.list_item} ${
                    activeIndex === index ? styles.active : ""
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <div className={styles.item_number}>
                    <span className={styles.line}></span>
                    <span className={styles.number}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <span className={styles.item_text}>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content - Code Editor */}
          <div className={styles.right_content}>
            <div className={styles.code_editor_wrapper}>
              <div className={styles.code_editor}>
                <div className={styles.editor_header}>
                  <div className={styles.window_controls}>
                    <span className={styles.control}></span>
                    <span className={styles.control}></span>
                    <span className={styles.control}></span>
                  </div>
                  <span className={styles.editor_title}>Editor</span>
                  <div className={styles.editor_icons}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M7.333 12.667A5.333 5.333 0 1 0 7.333 2a5.333 5.333 0 0 0 0 10.667zM7.333 4v4M7.333 10.667h.007"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M8 10.667a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                </div>
                <div className={styles.editor_body}>
                  <div className={styles.file_explorer}>
                    <div className={styles.folder_structure}>
                      <div className={styles.folder_item}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M2.667 4.667v8.666c0 .737.597 1.334 1.333 1.334h8c.737 0 1.334-.597 1.334-1.334V6c0-.737-.597-1.333-1.334-1.333H8L6.667 3.333H4c-.736 0-1.333.597-1.333 1.334z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>wispy</span>
                      </div>
                      <div className={styles.folder_item}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M2.667 4.667v8.666c0 .737.597 1.334 1.333 1.334h8c.737 0 1.334-.597 1.334-1.334V6c0-.737-.597-1.333-1.334-1.333H8L6.667 3.333H4c-.736 0-1.333.597-1.333 1.334z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>src</span>
                      </div>
                      <div className={`${styles.folder_item} ${styles.active}`}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M5.333 2.667h5.334L13.333 6v6.667c0 .736-.597 1.333-1.333 1.333H4c-.736 0-1.333-.597-1.333-1.333V4c0-.736.597-1.333 1.333-1.333z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>README.md</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.code_area}>
                    <div className={styles.code_tabs}>
                      <span className={styles.tab}>index.js</span>
                      <span className={`${styles.tab} ${styles.active}`}>
                        README.md
                      </span>
                      <span className={styles.tab}>.gitignore</span>
                    </div>
                    <div className={styles.code_content}>
                      {activeItem?.codeImage ? (
                        <div className={styles.code_image_wrapper}>
                          <Image
                            src={activeItem.codeImage}
                            alt={activeItem.title}
                            width={800}
                            height={600}
                            className={styles.code_image}
                            priority={activeIndex === 0}
                          />
                        </div>
                      ) : (
                        <pre className={styles.code_preview}>
                          <code>
                            {activeItem?.codePreview || `import mongoose, { Schema } from 'mongoose'

export const collection = 'Product'

const schema = new Schema({
  name: { type: String, required: true },
  description: { type: String }
}, { timestamps: true })

export default mongoose.model(collection, schema, collection)`}
                          </code>
                        </pre>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {closingText && (
              <p className={styles.closing_text}>{closingText}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

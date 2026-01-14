"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Button.module.scss";

export default function Button({ href, children, icon, variant = "primary", target, rel }) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`${styles.button_wrapper} ${
        variant === "secondary" ? styles.secondary : ""
      }`}
    >
      {children}
      {icon && <Image src={icon} width={20} height={20} alt="button-icon" />}
    </Link>
  );
}

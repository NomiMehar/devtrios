"use client";
import { useEffect } from "react";
import style from "./Header.module.scss";
import MobileNav from "./mobile-nav/MobileNav";
import Navigation from "./navigation/Navigation";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Header() {
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = () => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 80
      ? header.classList.add(`${style.is_sticky}`)
      : header.classList.remove(`${style.is_sticky}`);
  };

  return (
    <header className={`${style.main_header}`}>
      <div className={`header-section ${style.navigation_wrapper}`}>
        <div className={`flex-between-center ${style.navigation_content}`}>
          <Link href="/">
            <Image
              src="/assets/images/header/logo.webp"
              width={120}
              height={40}
              alt="logo"
            />
          </Link>
          <Navigation />
          <div className={`flex items-center ${style.contact_us}`}>
            <Link href="/">Contact Us</Link>
          </div>
        </div>
      </div>

      <MobileNav />
    </header>
  );
}

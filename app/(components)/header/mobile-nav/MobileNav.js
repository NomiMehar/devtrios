"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import style from "../Header.module.scss";
import { usePathname } from "next/navigation";
import Image from "next/image";
import serviceItems from "./MobileNavList.json";

const menuData = [
  { label: "Home", href: "/" },

  {
    label: "Services",
    subMenu: serviceItems.map((service) => ({
      label: service.title,
      href: service.link,
      subMenu: service.sections.flatMap((section, index) => {
        // If first section matches service title, show items directly
        if (index === 0 && section.title === service.title) {
          return section.items.map((item) => ({
            label: item.name,
            href: item.link,
          }));
        }

        // Otherwise keep section as nested submenu
        return [
          {
            label: section.title,
            subMenu: section.items.map((item) => ({
              label: item.name,
              href: item.link,
            })),
          },
        ];
      }),
    })),
  },

  { label: "About Us", href: "/about-us" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function MobileNav() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState({});
  const pathname = usePathname();

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  // Close sidebar on route change
  useEffect(() => {
    setIsSidebarOpen(false);
    setExpandedMenus({});
  }, [pathname]);

  // Toggle a submenu open/close
  const toggleMenu = (label) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const renderSubMenu = (menu) => {
    const isExpanded = expandedMenus[menu.label] || false;

    return menu.subMenu ? (
      <div key={menu.label} className={style.subMenu}>
        <span onClick={() => toggleMenu(menu.label)}>
          {menu.label}
          <i
            className={`${style.expandIcon} ${isExpanded ? style.open : ""}`}
          />
        </span>

        {isExpanded && (
          <div className={style.subMenuContent}>
            {menu.subMenu.map((sub) =>
              sub.subMenu ? (
                renderSubMenu(sub)
              ) : (
                <Link
                  key={sub.href}
                  href={sub.href}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {sub.label}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    ) : (
      <Link
        key={menu.href}
        href={menu.href}
        onClick={() => setIsSidebarOpen(false)}
      >
        {menu.label}
      </Link>
    );
  };

  return (
    <>
      <div className={style.mobileHeader}>
        <div className="container">
          <div className={style.mobileHeaderPadding}>
            <Link href="/">
              <Image
                width={120}
                height={25}
                className={style.mobileLogo}
                src="/assets/images/header/logo.webp"
                alt="logo"
                priority
              />
            </Link>
            <span onClick={toggleSidebar}>=</span>
          </div>
        </div>
      </div>
      <div className={`${style.sidebar} ${isSidebarOpen ? style.active : ""}`}>
        <div className={style.sidebarHeader}>
          <Link href="/">
            <Image
              width={120}
              height={25}
              src="/assets/images/header/logo.webp"
              alt="logo"
              priority
            />
          </Link>
          <span onClick={toggleSidebar}>x</span>
        </div>
        <div className={style.menu}>{menuData.map(renderSubMenu)}</div>
        <div className={style.footerContact}>
          <Link href="/get-a-quote">Get a Quote</Link>
        </div>
      </div>
      {isSidebarOpen && (
        <div className={style.overlay} onClick={toggleSidebar} />
      )}
    </>
  );
}

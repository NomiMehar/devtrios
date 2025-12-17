import Link from "next/link";
import style from "../Header.module.scss";
import styleMenu from "../mega-menu/megaMenu.module.scss";
import ServiceMegaMenu from "../mega-menu/ServiceMegaMenu";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Image from "next/image";

export default function Navigation() {
  const [isActive, setActive] = useState("false");
  const [companyActive, setCompanyActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };
  const companyToggle = () => {
    setCompanyActive(!companyActive);
  };

  const handleMouseEnter = () => {
    document.body.classList.add("hovered");
  };
  const handleMouseLeave = () => {
    document.body.classList.remove("hovered");
  };
  return (
    <ul className={`list-none flex ${style.main_menu}`}>
      <li>
        <Link
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          href="/"
        >
          Home
        </Link>
      </li>
      <li className={isActive ? "" : `${styleMenu.menu_active}`}>
        <OutsideClickHandler
          onOutsideClick={() => {
            setActive("false");
          }}
        >
          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`${style.menuwrap} ${styleMenu.menuwrap}`}
            onClick={handleToggle}
          >
            Services{" "}
            <Image
              src="/assets/images/header/chevron.svg"
              width={12}
              height={12}
              alt="chevron"
            />
          </button>
          <ServiceMegaMenu
            onClick={() => {
              setActive("false");
            }}
          />
        </OutsideClickHandler>
      </li>
      <li>
        <Link
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          href="/services"
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          href="/about-us"
        >
          About Us
        </Link>
      </li>
      <li>
        <Link
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          href="/blog"
        >
          Blog
        </Link>
      </li>
      <li>
        <Link
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          href="/contact-us"
        >
          Contact Us
        </Link>
      </li>
    </ul>
  );
}

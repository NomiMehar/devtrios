import Link from "next/link";
import style from "../Header.module.scss";
import styleMenu from "../mega-menu/megaMenu.module.scss";
import ServiceMegaMenu from "../mega-menu/ServiceMegaMenu";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navigation() {
  const [isActive, setActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setActive(false);
  }, [pathname]);

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

      <li
        className={`${isActive ? styleMenu.menu_active : ""}`}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <Link
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          href="/services"
          className={style.menuwrap}
        >
          Services
          <Image
            src="/assets/images/header/chevron.svg"
            width={12}
            height={12}
            alt="chevron"
          />
        </Link>

        <ServiceMegaMenu />
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

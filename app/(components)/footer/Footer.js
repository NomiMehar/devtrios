import Link from "next/link";
import React  from "react";
import style from "./Footer.module.scss";
import Image from "next/image";

function Footer() {
  const handleMouseEnter = () => {
    document.body.classList.add('hovered');
  };
  const handleMouseLeave = () => {
    document.body.classList.remove('hovered');
  };
  return (
      <>
        <footer className={style.footer}>
          <div className="container">
            <div className={`row flex ${style.row}`}>
              <div className={style.logo}>
                <Image width={100} height={100} src="/assets/images/footer/logo.svg" alt="logo" />
              </div>
              <div className={style.footer_links_wrap}>
                <div className="row flex">
                  <div className={style.footer_links}>
                    <h4>Expertise</h4>
                    <ul className="list-none">
                      <li>
                        <Link
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            href="/services/ai-ml/ai-consulting">Artificial Intelligence</Link>
                      </li>
                      <li>
                        <Link
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            href="/services/innovation/mobility/mobile-development">Mobile App Dev</Link>
                      </li>
                      <li>
                        <Link
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            href="/services/ai-ml/generative-ai-development">Generative AI</Link>
                      </li>
                      <li>
                        <Link
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            href="/services/next-gen-tech/blockchain/blockchain-development">Blockchain</Link>
                      </li>
                      <li>
                        <Link
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            href="/services/next-gen-tech/gamification/mobile-game-development">Gaming</Link>
                      </li>
                      {/* <li>
                        <Link
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            href="/company/about-us">Branding</Link>
                      </li> */}
                    </ul>
                  </div>
                  <div className={style.footer_links} style={{paddingLeft: 25}}>
                    <h4>COMPANY</h4>
                    <ul className="list-none">
                      <li>
                        <Link
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            href="/company/about-us">About Us</Link>
                      </li>
                      <li>
                        <Link
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            href="/company/team">Our Team</Link>
                      </li>
                      <li>
                        <Link
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            href="/contact-us">Contact Us</Link>
                      </li>
                      <li>
                        <Link
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            href="/case-studies">Case Studies</Link>
                      </li>
                    </ul>
                  </div>
                 
                </div>
              </div>
              <div className={style.newsletter}>
                <div className={style.footer_links}>
                  <h4>Join us</h4>
                  <p>
                    By providing your e-mail address, you are consenting to receive press releases.
                  </p>
                  <div className={style.input_group}>
                    <input
                        type="text"
                        placeholder="Enter your Email"
                        name="email"
                    />
                    <button
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="btn-green">
                      SUBSCRIBE <i className="fa fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.footer_bottom}>
              <div className={`${style.grid_container_2}`}>
                {/* <ul className={`list-none flex`}>
                  <li>
                    <Link
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        href="/">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        href="/">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        href="/">Cookies</Link>
                  </li>
                </ul> */}
                <ul className={`list-none flex center justify-end ${style.content}`}>
                  <li>
                  <span>
                  ©2017-2024 DigiMark Developers. All rights reserved.
                  </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={style.live_chat}>
              <Image width={100} height={100}
                  src="/assets/images/footer/live-chat-icon.svg"
                  alt="live-chat-icon"
              />
            </div>
          </div>
        </footer>
      </>
  );
}

export default Footer;

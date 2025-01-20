import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/Header.module.scss";
import { AppImages, PLAYSTORE_LINK } from "./constants";
import Image from "next/image";

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link className={styles.navItem} href="/">
          {/* <img src={AppImages.LONG_LOGO} height={40} alt="tuft_logo" /> */}
          <Image src={AppImages.LONG_LOGO} height={40} width={90} alt="tuft_logo" />
        </Link>
      </div>
      <nav className={styles.desktopNav}>
        <Link className={styles.navItem} href="/">
          Home
        </Link>
        <Link className={styles.navItem} href="/features">
          Features
        </Link>
        <Link className={styles.navItem} href="/pricing">
          Pricing
        </Link>
        <Link className={styles.navItem} href="/blog">
          Blog
        </Link>
        <a href={PLAYSTORE_LINK}>
          <button>Get Started</button>
        </a>
      </nav>
      <div className={styles.mobileNav}>
        <button onClick={toggleMobileNav} className={styles.hamburger}>
          &#9776;
        </button>
        {showMobileNav && (
          <div className={styles.floatingContainer}>
            <button onClick={toggleMobileNav} className={styles.closeBtn}>
              &#10006;
            </button>
            <Image src={AppImages.LONG_LOGO} height={40} width={90} alt="tuft_logo" />

            <Link href="/">Home</Link>
            <Link href="/features">Features</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/blog">Blog</Link>
            <a href={PLAYSTORE_LINK}>
              <button>Get Started</button>
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

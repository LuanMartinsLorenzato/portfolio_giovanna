import styles from "./header.module.scss";
import menuIcon from "../../../public/assets/menu-icon.svg";
import menuIcon_darkMode from "../../../public/assets/menu-icon_darkMode.svg";
import closeMenuIcon_darkMode from "../../../public/assets/close-menu-icon-dark.svg";
import closeMenuIcon from "../../../public/assets/close-menu-icon-light.svg";
import nameIcon from "../../../public/assets/name-icon.svg";
import iconL_darkMode from "../../../public/assets/iconL_darkMode.svg";
import iconL from "../../../public/assets/iconL.svg";
import dayIcon from "../../../public/assets/day-icon.svg";
import nightIcon from "../../../public/assets/night-icon.svg";
import useWindowResize from "../../hooks/useWindowResize";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { tabs } from "shared/utils/contants";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

export default function Header(): JSX.Element {
  let isMobile = useWindowResize().width < 1200 ? true : false;
  let [showMenuMobile, setShowMenuMobile] = useState(false);
  let [isActiveLanguage, setIsActiveLanguage] = useState(false);
  const _t = useTranslations("Header");
  const { route } = useRouter();
  const { theme, setTheme } = useTheme();
  let [iconColors, setIconColors] = useState(theme == 'dark' ? nightIcon.src : dayIcon.src);


  const handleMenu = () => {
    setShowMenuMobile(!showMenuMobile);
  };

  const handleLanguage = () => {
    let slideOffElement = document.getElementById("slideOff");
    isActiveLanguage
      ? slideOffElement?.classList.add(styles.slide_off)
      : slideOffElement?.classList.remove(styles.slide_off);
    setIsActiveLanguage(!isActiveLanguage);
  };

  const handleDarkMode = () => {
    setTheme(theme == 'dark' ? 'light' : 'dark')
    theme == 'dark' 
      ? setIconColors(dayIcon.src)
      : setIconColors(nightIcon.src);
  };

  return (
    <>
      <header
        className={styles.header}
        onClick={isMobile && showMenuMobile ? handleMenu : undefined}
      >
        {isMobile ? (
          <>
            <div className={styles.actions}>
              <button onClick={handleLanguage}>
                <img
                  src={theme == 'dark' ? iconL_darkMode.src : iconL.src}
                  alt="Languages"
                  width={25}
                  height={25}
                />
              </button>
              <div
                className={`${styles.languages_container} ${styles.slide_off}`}
                id="slideOff"
              >
                <button>
                  <Link href={route} locale={"en"} className={theme == 'dark' ? styles.language_link_darkMode : styles.language_link}>
                    <span>English</span>
                  </Link>
                </button>
                <button>
                  <Link href={route} locale={"pt"} className={theme == 'dark' ? styles.language_link_darkMode : styles.language_link}>
                    <span>Português - Br</span>
                  </Link>
                </button>
              </div>
              <button onClick={handleDarkMode}>
                <img
                  src={iconColors}
                  alt="Change colors"
                  width={25}
                  height={25}
                />
              </button>
            </div>
            <button
              onClick={handleMenu}
              className={
                !showMenuMobile
                  ? `${styles.menuBtn}`
                  : `${styles.blur_menu} ${styles.menuBtn}`
              }
            >
              <img src={theme == 'dark' ? menuIcon_darkMode.src : menuIcon.src} alt="Menu" />
            </button>
          </>
        ) : (
          <>
            <nav className={styles.navBar_desktop}>
              <img src={nameIcon.src} alt="Menu" className={styles.name_icon} />
              {tabs.map((tab) => (
                <a href={tab.path} key={tab.name} className={theme === 'dark' ? styles.tabs_darkMode : styles.tabs}>
                  {_t(tab.name)}
                </a>
              ))}
            </nav>
            <div className={styles.actions}>
              <button onClick={handleLanguage}>
                <img
                  src={theme == 'dark' ? iconL_darkMode.src : iconL.src}
                  alt="Languages"
                  width={30}
                  height={30}
                />
              </button>
              <div
                className={`${styles.languages_container} ${styles.slide_off}`}
                id="slideOff"
              >
                <button>
                  <Link href={route} locale={"en"} className={theme == 'dark' ? styles.language_link_darkMode : styles.language_link}>
                    <span>English</span>
                  </Link>
                </button>
                <button>
                  <Link href={route} locale={"pt"} className={theme == 'dark' ? styles.language_link_darkMode : styles.language_link}>
                    <span>Português - Br</span>
                  </Link>
                </button>
              </div>
              <button onClick={handleDarkMode}>
                <img
                  src={iconColors}
                  alt="Change colors"
                  width={35}
                  height={35}
                />
              </button>
            </div>
          </>
        )}
        {showMenuMobile && (
          <>
            <div className={theme == 'dark' ? styles.overlay_darkMode : styles.overlay}>
              <nav className={theme == 'dark' ? styles.navBar_darkMode : styles.navBar}>
                <div className={styles.border_position}>
                  <div className={styles.border_gradient} />
                  <div className={styles.border_gradient} />
                </div>
                <img
                  src={nameIcon.src}
                  alt="Menu"
                  className={styles.name_icon}
                />
                <button onClick={handleMenu} className={styles.closeMenuBtn}>
                  <img src={theme == 'dark' ? closeMenuIcon_darkMode.src : closeMenuIcon.src} alt="Menu" />
                </button>
                <div className={styles.container_tabs}>
                  {tabs.map((tab) => (
                    <a href={tab.path} key={tab.name} className={theme === 'dark' ? styles.tabs_darkMode : styles.tabs}>
                      {_t(tab.name)}
                    </a>
                  ))}
                </div>
              </nav>
            </div>
          </>
        )}
      </header>
    </>
  );
}

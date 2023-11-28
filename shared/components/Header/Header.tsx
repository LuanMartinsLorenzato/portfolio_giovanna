import styles from "./header.module.scss";
import menuIcon from "../../../public/assets/menu-icon.svg";
import closeMenuIcon from "../../../public/assets/close-menu-icon-light.svg";
import nameIcon from "../../../public/assets/name-icon.svg";
import languageIcon from "../../../public/assets/language-icon.svg";
import dayIcon from "../../../public/assets/day-icon.svg";
import nightIcon from "../../../public/assets/night-icon.svg";
import useWindowResize from "../../hooks/useWindowResize";
import Link from "next/link";
import { tabs } from "shared/utils/contants";
import { useState } from "react";

export default function Header(): JSX.Element {
  let isMobile = useWindowResize().width < 1200 ? true : false;
  let [showMenuMobile, setShowMenuMobile] = useState(false);
  let [isActiveLanguage, setIsActiveLanguage] = useState(false);
  let [iconColors, setIconColors] = useState(nightIcon.src);

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

  const handleColors = () => {
    iconColors === nightIcon.src
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
                  src={languageIcon.src}
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
                  <span>English</span>
                </button>
                <button>
                  <span>Português - Br</span>
                </button>
              </div>
              <button onClick={handleColors}>
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
              <img src={menuIcon.src} alt="Menu" />
            </button>
          </>
        ) : (
          <>
            <nav className={styles.navBar_desktop}>
              <img src={nameIcon.src} alt="Menu" className={styles.name_icon} />
              {tabs.map((tab) => (
                <a href={tab.path} key={tab.name} className={styles.tabs}>
                  {tab.name}
                </a>
              ))}
            </nav>
            <div className={styles.actions}>
              <button onClick={handleLanguage}>
                <img
                  src={languageIcon.src}
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
                  <span>English</span>
                </button>
                <button>
                  <span>Português - Br</span>
                </button>
              </div>
              <button onClick={handleColors}>
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
            <div className={styles.overlay}>
              <nav className={styles.navBar}>
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
                  <img src={closeMenuIcon.src} alt="Menu" />
                </button>
                <div className={styles.container_tabs}>
                  {tabs.map((tab) => (
                    <a href={tab.path} key={tab.name} className={styles.tabs}>
                      {tab.name}
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

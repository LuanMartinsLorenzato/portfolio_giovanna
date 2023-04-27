import styles from './header.module.scss';
import menuIcon from '../../../public/assets/menu-icon.svg';
import useWindowResize from '../../hooks/useWindowResize'
import Link from 'next/link';
import { useState } from 'react';

const tabs = [
  'Home',
  'Sobre',
  'Projetos',
  'Skills',
  'Contato',
]

export default function Header (): JSX.Element {
  let isMobile = useWindowResize().width < 500 ? true : false;
  let [showMenuMobile, setShowMenuMobile] = useState(false);

  const handleMenu = () => {
    setShowMenuMobile(!showMenuMobile);
  }
  
  return(
    <>
      <header className={styles.header} onClick={isMobile ? handleMenu : undefined}>
        {
          isMobile ? (
            <button onClick={handleMenu} className={styles.menuBtn}>
              <img src={menuIcon.src} alt="Menu" />
            </button>
          ) :
          (
            <nav>
              {
                tabs.map(tab => (
                  <button key={tab} className={styles.tabs}>
                    {tab}
                  </button>
                ))
              }
            </nav>
          )
        }
        {showMenuMobile && (
          <>
            <div className={styles.overlay}>
              <nav>
                {
                  tabs.map(tab => (
                    <button key={tab} className={styles.tabs}>
                      {tab}
                    </button>
                  ))
                }
              </nav>
            </div>
          </>
          )
        }
      </header>
    </>
  )
}
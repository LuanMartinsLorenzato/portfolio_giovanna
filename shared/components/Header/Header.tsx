import styles from './header.module.scss';
import menuIcon from '../../../public/assets/menu-icon.svg';
import useWindowResize from '../../hooks/useWindowResize'
import Link from 'next/link';
import { useState } from 'react';

const tabs = [
  {name: 'Home', path: '/'},
  {name: 'Sobre', path: '/sobre'},
  {name: 'Projetos', path: '/projetos'},
  {name: 'Skills', path: '/skills'},
  {name: 'Contato', path: '/contato'},
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
                  <Link href={tab.path} key={tab.name} className={styles.tabs}>
                    {tab.name}
                  </Link>
                ))
              }
            </nav>
          )
        }
        {showMenuMobile && (
          <>
            <div className={styles.overlay}>
              <nav className={styles.navBar}>
                {
                  tabs.map(tab => (
                    <Link href={tab.path} key={tab.name} className={styles.tabs}>
                      {tab.name}
                    </Link>
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
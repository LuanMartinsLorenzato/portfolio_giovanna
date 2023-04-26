import styles from './header.module.scss'
import menuIcon from '../../../public/assets/menu-icon.svg'

const tabs = [
    'Home',
    'Sobre',
    'Projetos',
    'Skills',
    'Contato',
]

export default function Header () {
  return(
    <>
      <header className={styles.header}>
        <button>
          <img src={menuIcon.src} alt="Menu" />
        </button>
        {/* {tabs.map(tab =>{
          return(
            <button key={tab}>
              {tab}
            </button>
          )
        })} */}
      </header>
    </>
  )
}
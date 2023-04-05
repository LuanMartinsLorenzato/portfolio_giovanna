import styles from './header.module.scss'

const tabs = [
    'Home',
    'Sobre',
    'Projetos',
    'Skills',
    'Contato',
]
export default function Header () {
  return(
    <nav className={styles.nav}>
      {tabs.map(tab =>{
        return(
          <button key={tab}>
            {tab}
          </button>
        )
      })}
    </nav>
  )
}
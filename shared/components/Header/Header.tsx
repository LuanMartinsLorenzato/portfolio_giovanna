import styles from './header.module.scss'
import menuIcon from '../../../public/assets/menu-icon.svg'
import useWindowDimensions from 'use-window-dimensions';
const tabs = [
    'Home',
    'Sobre',
    'Projetos',
    'Skills',
    'Contato',
]
const Component: React.FC = () => {
  const { width, height } = useWindowDimensions();

  console.log("width: " + width + "height: " + height);
  
  return (
    <div>
      <h1>Height: {width} | Width: {height}</h1>
    </div>
  );
}
export default function Header () {
  
  return(
    <>
      <header className={styles.header}>
        <Component />
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
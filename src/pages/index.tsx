import styles from '../../styles/onePage.module.scss'
import Header from '../../shared/components/Header/Header';
import Home from 'modules/Home/Home';
import AboutMe from 'modules/AboutMe/AboutMe';
import bg from '../../public/assets/gif/bgImage.gif'

export default function OnePage() {
  return (
    <>
      <main className={styles.main}
      style={{
        backgroundImage: `url('${bg.src}')`,
      }}>
        <Header />
        <Home />
        <AboutMe />
        {/*<Projects />
        <Skills />
        <Contact />*/} 
      </main>
    </>
  )
}

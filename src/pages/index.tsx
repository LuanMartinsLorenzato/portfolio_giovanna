import styles from '../../styles/onePage.module.scss'
import Header from '../../shared/components/Header/Header';
import Home from 'modules/Home/Home';
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
     {/*<About />
        <Projects />
        <Skills />
        <Contact />*/} 
      </main>
    </>
  )
}

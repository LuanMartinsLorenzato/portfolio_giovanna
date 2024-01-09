import styles from '../../styles/onePage.module.scss'
import Header from '../../shared/components/Header/Header';
import Home from 'modules/Home/Home';
import AboutMe from 'modules/AboutMe/AboutMe';
import bg from '../../public/assets/gif/bgImage.gif'
import Projects from 'modules/Projects/Projects';
import Contact from 'modules/contact/Contact';

export default function OnePage() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.content} style={{
          backgroundImage: `url('${bg.src}')`,
          opacity: 0.20,
        }} />
        <Header />
        <Home />
        <AboutMe />
        <Projects />
        {/*  <Contact /> */}
      </main>
    </>
  )
}

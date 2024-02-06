import styles from "../../styles/onePage.module.scss";
import { GetStaticPropsContext } from "next";
import Header from "../../shared/components/Header/Header";
import Home from "modules/Home/Home";
import AboutMe from "modules/AboutMe/AboutMe";
import bg from "../../public/assets/gif/bgImage.gif";
import Projects from "modules/Projects/Projects";
import Contact from "modules/contact/Contact";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function OnePage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, [])

  if (!mounted) return null;

  return (
    <>
      <main className={theme == 'dark' ? styles.main_darkMode : styles.main}>
        <div className={styles.content} style={{ backgroundImage: `url('${bg.src}')`, opacity: 0.2, zIndex: 0 }} />
        <Header />
        <Home />
        <AboutMe />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
}

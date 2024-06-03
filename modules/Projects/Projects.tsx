import React, { useEffect, useState } from "react";
import styles from "./projects.module.scss";
import ProjectsService from "shared/services/projects-service";
import { ProjectsType } from "shared/utils/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination } from "swiper/modules";
import link_icon_darkMode from "../../public/assets/link_icon_darkMode.svg";
import link_icon from "../../public/assets/link_icon.svg";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import ModalImages from "shared/components/modalImages/ModalImages";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

const Projects: React.FC = () => {
  const projectsService = new ProjectsService("giovanna_projects");
  const [projects, setProjects] = useState<ProjectsType[]>();
  const [currentProject, setCurrentProject] = useState<ProjectsType>();
  const [isActiveModal, setIsActiveModal] = useState<boolean>(false);
  const _t = useTranslations("Projects");
  const { locale } = useRouter();
  const { theme } = useTheme();

  useEffect(() => {
    let isMounted = true;
    const getProjects = async () => {
      const data: ProjectsType[] =
        await projectsService.getProjectsByCollection();
      if (isMounted && data.length > 0) {
        setProjects(data);
        setCurrentProject(data[0]);
      }
    };
    getProjects();
    return () => {
      isMounted = false;
    };
  }, []);

  const setIndexProject = (indexProject: number) => {
    if (!projects) return;
    setCurrentProject(projects[indexProject]);
  };

  return (
    <section className={styles.projects} id="projects">
      {isActiveModal && (
        <ModalImages
          images={currentProject?.images}
          closeModal={() => setIsActiveModal(!isActiveModal)}
        />
      )}
      <div
        className={theme == "dark" ? styles.project_darkMode : styles.project}
      >
        <h2>{_t("title")}</h2>
        <div className={styles.header_description}>
          <h3>{currentProject?.title}.</h3>
          <div className={styles.line} />
          <a href={currentProject?.link}>
            <Image
              src={theme == "dark" ? link_icon_darkMode : link_icon}
              alt="Link Icon"
              priority={true}
              placeholder="empty"
            />
          </a>
        </div>
        <div className={styles.description}>
          <div className={styles.description_overflow}>
            <p>
              {locale === "en"
                ? currentProject?.en_description
                : currentProject?.description}
            </p>
          </div>

          <div className={styles.border_line} />
        </div>
      </div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination]}
        className={styles.mySwiper}
        pagination={{
          dynamicBullets: true,
        }}
        onSlideChange={(swiper) => setIndexProject(swiper.activeIndex)}
      >
        {projects?.map((project, i) => (
          <SwiperSlide key={i}>
            <div
              className={styles.overlay}
              onClick={() => setIsActiveModal(!isActiveModal)}
            />
            <img
              src={project.thumb}
              alt="Image thumb"
              className={styles.thumb}
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;

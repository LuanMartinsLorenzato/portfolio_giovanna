
import React, { useEffect, useState } from 'react';
import styles from './projects.module.scss'
import ProjectsService from 'shared/services/projects-service';
import { ProjectsType } from 'shared/utils/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination } from 'swiper/modules';
import link_icon from '../../public/assets/link_icon.svg'

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

const Projects: React.FC = () => {
	const projectsService = new ProjectsService('giovanna_projects');
	const [projects, setProjects] = useState<ProjectsType[]>()
	const [currentProject, setCurrentProject] = useState<ProjectsType>()

	useEffect(() => {
		let isMounted = true;
		const getProjects = async () => {
			const data: ProjectsType[] = await projectsService.getProjectsByCollection()
			if (isMounted && data.length > 0) {
				setProjects(data)
				setCurrentProject(data[0]);
			}
		}
		getProjects();
		return () => {
      isMounted = false; 
    };
	}, [])

	const setIndexProject = (indexProject: number) => {
		if (!projects) return;
		setCurrentProject(projects[indexProject])
	}

	return (
		<section className={styles.container}>
			<h2>Projects</h2>
			<div className={styles.projects_wrap}>
				<div className={styles.project}>
					<div className={styles.header_description}>
						<h3>{currentProject?.title}.</h3>
						<div className={styles.line} />
						<img src={link_icon.src} alt="Link Icon" />
					</div>
					<div className={styles.description}>
						<div className={styles.border_line} />
						<p>{currentProject?.description}</p>
					</div>
				</div>
				<Swiper
					effect={'cards'}
					grabCursor={true}
					modules={[EffectCards, Pagination]}
					className="mySwiper"
					pagination={{
						dynamicBullets: true,
					}}
					onSlideChange={(swiper) => setIndexProject(swiper.activeIndex)}
				>
					{projects?.map((project, i) => (
						<SwiperSlide key={i}>
							<div className={styles.overlay} />
							<img src={project.thumb} alt="Image thumb" className={styles.thumb} onClick={() => console.log('função')}/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default Projects;
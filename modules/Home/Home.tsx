import React from 'react';
import styles from './home.module.scss'
import imgGi from '../../public/assets/imgs/img_gi.png'
import { useTranslations } from "next-intl";
import Image from 'next/image';
import { useTheme } from 'next-themes';

const Home: React.FC = () => {
	const _t = useTranslations("Home");
	const { theme, setTheme } = useTheme();


	return (
		<section className={styles.container} id='home'>
			<div className={theme == 'dark' ? styles.content_description_darkMode : styles.content_description}>
				<h1>{_t('hello')}</h1>
				<span>{_t('name')}</span>
				<p>{_t('i')} <span>{_t('design')}</span></p>
			</div>
			<Image
				src={imgGi}
				alt="Image work time!"
				priority={true}
				placeholder="empty"
				className={styles.img}
				width={285}
				height={214}
			/>
		</section>
	);
};

export default Home;
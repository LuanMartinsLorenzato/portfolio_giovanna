
import React from 'react';
import styles from './aboutMe.module.scss'
import celebrate_icon from '../../public/assets/celebrate_icon.svg'
import map_icon from '../../public/assets/map_icon.svg'
import emoji_icon from '../../public/assets/emoji_icon.svg'
import send_icon from '../../public/assets/send_icon.svg'
import AnimateChat from '../../shared/components/animateChat/animateChat'
import { messagesArr, LOCATION } from '../../shared/utils/contants'
import { AgeController } from 'shared/controllers/age-controller';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';

const AboutMe: React.FC = () => {
	const _t = useTranslations("About");
	const { theme } = useTheme();

	const getAge = () => {
		const ageController = new AgeController(1999, 12, 22)
		return ageController.getAge();
	}

	const getLocation = () => {
		return LOCATION;
	}

	const popUp: any = (event: MouseEvent) => {

	}

	const downloadResume = () => {
		// fazer download do currículo aqui
	}

	return (
		<section className={styles.about} id='about'>
			<div className={styles.about_container}>
				<h2>{_t('title_1')}</h2>
				<h2>{_t('title_2')}</h2>
			</div>
			<section className={theme == 'dark' ? styles.container_description_darkMode : styles.container_description}>
				<div className={styles.wrap_low_description}>
					<div className={styles.border_img}>
						<div className={styles.online_stats} />
					</div>
					<div className={theme == 'dark' ? styles.low_description_darkMode : styles.low_description}>
						<span>Giovanna Conti Martins</span>
						<div className={styles.ageAndLocation}>
							<div className={styles.items}>
								<Image src={celebrate_icon} alt="Celebrate Icon" className={styles.icon_celebrate} priority={true} placeholder='empty' />
								<p>{getAge()} {_t('years')}</p>
							</div>
							<div className={styles.items}>
								<Image src={map_icon} alt="Map Icon" className={styles.icon_map} priority={true} placeholder='empty' />
								<p>{getLocation()}</p>
							</div>
						</div>
					</div>
					<button className={styles.resume_btn} onClick={() => {downloadResume}}>{_t('resume')}</button>
				</div>
				<hr />
				<div className={styles.high_description}>
					<AnimateChat messages={messagesArr} />
					<div className={theme == 'dark' ? styles.container_input_darkMode : styles.container_input}>
						<Image src={emoji_icon} alt="Map Icon" width={20} height={20} priority={true} placeholder='empty' className={styles.icon_left} />
						<button className={styles.button_getInTouch} onClick={() => { popUp() }} >
							<span>{_t('get_in_touch')}</span>
						</button>
						<Image src={send_icon} alt="Map Icon" width={20} height={20} priority={true} placeholder='empty' className={styles.icon_right} />
					</div>
				</div>
			</section>
		</section>
	);
};

export default AboutMe;
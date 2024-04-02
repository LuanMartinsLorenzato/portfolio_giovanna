
import React from 'react';
import styles from './contact.module.scss'
import dot_icon from '../../public/assets/dot_icon.svg'
import Image from 'next/image';
import { SOCIAL } from '../../shared/utils/contants'
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';

const Contact: React.FC = () => {
	const _t = useTranslations("Contact_me");
	const { theme } = useTheme();

	return (
		<footer className={styles.container_contact} id='contact'>
			<div className={theme == 'dark' ? styles.wrap_header_darkMode : styles.wrap_header}>
				<h3>{_t('title_1')}</h3>
				<p className={styles.and}>{_t('title_2')}</p>
				<p className={styles.second_p}>{_t('title_3')} <span>{_t('title_4')}</span></p>
			</div>
			<div className={styles.wrap_contacts}>
				{SOCIAL.map((social, i) => (
					<div className={styles.contact} key={i}>
						<Image src={social.img} alt={social.name} width={103} height={103} priority={true} placeholder='empty' className={styles.qrCode_img}/>
						<div className={theme == 'dark' ? styles.wrap_content_darkMode : styles.wrap_content}>
							<p>{social.name}</p>
							<p>{social.value}</p>
						</div>
					</div>
				))}
			</div>
			<div className={theme == 'dark' ?  styles.developed_by_darkMode : styles.developed_by}>
				<p>{_t('designed')} Giovanna Conti</p>
				<Image src={dot_icon.src} alt="Dot Icon" width={15} height={15} priority={true} placeholder='empty' />
				<p>{_t('developed')} <a href="#" target="_blank" rel="noopener noreferrer">Luan Lorenzato</a></p>
				<Image src={dot_icon.src} alt="Dot Icon" width={15} height={15} priority={true} placeholder='empty' />
				<p>2024</p>
			</div>
		</footer>
	);
};

export default Contact;
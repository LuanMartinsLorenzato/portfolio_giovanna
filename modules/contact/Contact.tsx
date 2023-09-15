
import React from 'react';
import styles from './contact.module.scss'
import zap_img from '../../public/assets/imgs/zap_img.png'
import linkedin_img from '../../public/assets/imgs/linkedin_img.png'
import dot_icon from '../../public/assets/dot_icon.svg'

const social = [
	{name: 'WhatsApp', value: '(11) 943383791', img: `${zap_img.src}`},
	{name: 'LinkedIn', value: 'www.linkedin.com/in/giovanna-conti-martins',  img: `${linkedin_img.src}`},
]

const Contact: React.FC = () => {
	return (
		<footer className={styles.container_contact} id='contact'>
			<div className={styles.wrap_header}>
				<h3>Get in thouch</h3>
				<p className={styles.and}>and</p>
				<p className={styles.second_p}>Let's make something <span>great together.</span></p>
			</div>
			<div className={styles.wrap_contacts}>
				{social.map((social) => (
					<div className={styles.contact}>
						<img src={social.img} alt={social.name} />
						<div className={styles.wrap_content}>
							<p>{social.name}</p>
							<p>{social.value}</p>
						</div>
					</div>
				))}
			</div>
			<div className={styles.developed_by}>
				<p>Designed by Giovanna Conti</p>
				<img src={dot_icon.src} alt="Dot Icon" width={15} height={15} loading='lazy' />
				<p>Developed by Luan Lorenzato</p>
				<img src={dot_icon.src} alt="Dot Icon" width={15} height={15} loading='lazy' />
				<p>2023</p>
			</div>
		</footer>
	);
};

export default Contact;
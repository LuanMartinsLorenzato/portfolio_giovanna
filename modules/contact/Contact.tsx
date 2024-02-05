
import React from 'react';
import styles from './contact.module.scss'
import dot_icon from '../../public/assets/dot_icon.svg'
import Image from 'next/image';
import { SOCIAL } from '../../shared/utils/contants'

const Contact: React.FC = () => {
	return (
		<footer className={styles.container_contact} id='contact'>
			<div className={styles.wrap_header}>
				<h3>Get in thouch</h3>
				<p className={styles.and}>and</p>
				<p className={styles.second_p}>Let's make something <span>great together.</span></p>
			</div>
			<div className={styles.wrap_contacts}>
				{SOCIAL.map((social, i) => (
					<div className={styles.contact} key={i}>
						<Image src={social.img} alt={social.name} width={103} height={103} priority={true} placeholder='empty' className={styles.qrCode_img}/>
						<div className={styles.wrap_content}>
							<p>{social.name}</p>
							<p>{social.value}</p>
						</div>
					</div>
				))}
			</div>
			<div className={styles.developed_by}>
				<p>Designed by Giovanna Conti</p>
				<Image src={dot_icon.src} alt="Dot Icon" width={15} height={15} priority={true} placeholder='empty' />
				<p>Developed by Luan Lorenzato</p>
				<Image src={dot_icon.src} alt="Dot Icon" width={15} height={15} priority={true} placeholder='empty' />
				<p>2023</p>
			</div>
		</footer>
	);
};

export default Contact;
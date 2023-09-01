
import React, { useEffect, useState } from 'react';
import styles from './aboutMe.module.scss'
import celebrate_icon from '../../public/assets/celebrate_icon.svg'
import map_icon from '../../public/assets/map_icon.svg'
// import imgStatsGi from '../../public/imgs/img-stats-gi.jpg'

const AboutMe: React.FC = () => {
	
	const getAge = () => {
		let years = 23;
		return years;
	}

	const getLocation = () => {
		let location = 'São Paulo - Brasil';
		return location;
	}
  return (
    <>
			<section className={styles.container}>
				<div className={styles.about_container}>
					<h2>About</h2>
					<h2>me!</h2>
				</div>
				<section className={styles.container_description}>
					<div className={styles.border_img}>
						{/* <img src={imgStatsGi.src} alt="Image to about me" /> */}
						<div className={styles.online_stats}/>
					</div>
					<div className={styles.low_description}>
						<span>Giovanna Conti Martins</span>
						<div className={styles.ageAndLocation}>
							<div className={styles.items}>
								<img src={celebrate_icon.src} alt="Celebrate Icon" width={12} height={12} />
								<span>{getAge()}</span>
							</div>
							<div className={styles.items}>
								<img src={map_icon.src} alt="Map Icon" width={22} height={13} />
								<span>{getLocation()}</span>
							</div>
						</div>
					</div>
					<hr />
				</section>
			</section>
    </>
  );
};

export default AboutMe;
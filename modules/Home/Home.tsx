import React from 'react';
import styles from './home.module.scss'
import imgGi from '../../public/assets/imgs/img_gi.png'
import Image from 'next/image';

const Home: React.FC = () => {
	return (
		<section className={styles.container} id='home'>
			<div className={styles.content_description}>
				<h1>Hello!</h1>
				<span>My name is Giovanna Conti...</span>
				<p>I'am <span>Web Designer.</span></p>
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
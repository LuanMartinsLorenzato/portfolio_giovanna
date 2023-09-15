
import React from 'react';
import styles from './home.module.scss'
import imgGi from '../../public/imgs/img_gi.png'

const Home: React.FC = () => {
	return (
		<section className={styles.container} id='home'>
			<div className={styles.content_description}>
				<h1>Hello!</h1>
				<span>My name is Giovanna Conti...</span>
				<p>I'am <span>Web Designer.</span></p>
			</div>
			<img src={imgGi.src} alt="Image work time!" />
		</section>
	);
};

export default Home;
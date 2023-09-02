
import React, { useEffect, useState } from 'react';
import styles from './aboutMe.module.scss'
import celebrate_icon from '../../public/assets/celebrate_icon.svg'
import map_icon from '../../public/assets/map_icon.svg'
import emoji_icon from '../../public/assets/emoji_icon.svg'
import send_icon from '../../public/assets/send_icon.svg'
import left_mensage_icon_dark from '../../public/assets/left_mensage_icon_dark.svg'
//import imgStatsGi from '../../public/imgs/img-stats-gi.jpg'
import fig_luck from '../../public/imgs/fig_luck.png'

const mensages = [
	'Oii!! Eu sou estudante de Designer Gráfico e Digital',
	'Comecei minha jornada na área faz pouquíssimo tempo, por isso ainda tenho apenas alguns projetos desenvolvidos e outros ainda em processo de criação. Estou em busca de uma experiencia “oficial” na área para poder desenvolver e aprender muito mais!',
	'Meu objetivo é me tornar UX/UI especialista e poder liderar time de web designers.',
	'Espero poder fazer parte do seu time de Web Designers.',
	`${fig_luck.src}`,
]

const AboutMe: React.FC = () => {
	const [divVisible, setDivVisible] = useState(false);

  useEffect(() => {
    const handleScrollToDiv = () => {
      const div = document.getElementById('high_description');

      if (!div) return;

      const rect = div.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (isVisible) {
				if (!divVisible) {
					for (let i = 0; i < mensages.length; i++) {
						setTimeout(() => {
							addMensageInChats(mensages[i].toString())
						}, i * 1500);
					}
				}
        setDivVisible(true);
      } else {
				setDivVisible(false);
			}
  	};

  	window.addEventListener('scroll', handleScrollToDiv);

    return () => {
      window.removeEventListener('scroll', handleScrollToDiv);
    };

  }, [divVisible]);

  const addMensageInChats = (text: String) => {
		const high_description = document.getElementById('high_description');
		if (!high_description) return;
			const div = document.createElement('div');
			const leftMensageDiv = document.createElement('img');
			leftMensageDiv.setAttribute('class', `${styles.left_mensage}`);
			leftMensageDiv.src = left_mensage_icon_dark.src;
			leftMensageDiv.alt = 'Icon left';
			div.setAttribute('class', `${styles.div_mensage}`);
			const p = document.createElement('p');
			const img = document.createElement('img');
			div.appendChild(leftMensageDiv)
			img.alt = 'Luck';
			text === mensages[4] ? (img.src = text.toString(), div.appendChild(img)) : (p.append(text.toString()), div.appendChild(p))
			high_description.appendChild(div)
  };

	const getAge = () => {
		let years = 23;
		return years;
	}

	const getLocation = () => {
		let location = 'São Paulo - Brasil';
		return location;
	}

	const popUp: any = (event: MouseEvent) => {
		
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
					<div className={styles.high_description} id='high_description'>
						<div className={styles.container_input}>
							<img src={emoji_icon.src} alt="Map Icon" width={20} height={20} />
							<button className={styles.button_getInTouch} onClick={() => {popUp()}} >
								<span>Get in touch...</span>
							</button>
							<img src={send_icon.src} alt="Map Icon" width={20} height={20} />
						</div>
					</div>
				</section>
			</section>
    </>
  );
};

export default AboutMe;
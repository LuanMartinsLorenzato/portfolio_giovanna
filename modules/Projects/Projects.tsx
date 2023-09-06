
import React, { useEffect } from 'react';
import styles from './projects.module.scss'
import firebase from '../../shared/services/firebase'
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from '../../shared/services/firebase';

const Projects: React.FC = () => {

	useEffect(() => {
		getDownloadURL(ref(storage, 'giovanna/media_kit/media_kit_img1.jpg')).then((url) => {
			console.log(url);
		})
    // Faça algo com o objeto 'auth' do Firebase aqui
  }, []);

	const projectsData = [
		{
			name: 'Media kit',
			imgs : [{url: 'caminho'}, {url: 'caminho'}, {url: 'caminho'}, {url: 'caminho'}],
			description: 'Desenvolvido para uma influenciadora digital com foco na cultura oriental, o Mídia Kit foi criado com o intuito de preservar a identidade visual pessoal de Paloma, enquanto apresenta de forma clara seus conteúdos e informações essenciais. O design foi criado para ser diferenciado e exclusivo, transmitindo a personalidade única da cliente em todo o projeto. Dessa forma, criamos um portfólio distintivo, permitindo maiores oportunidades de parcerias e crescimento para Paloma.'
		}
	]
	return (
		<>
			<section className={styles.container}>
				<h2>Projects</h2>
				<img src="https://firebasestorage.googleapis.com/v0/b/portfolios-6f9be.appspot.com/o/giovanna%2Fmedia_kit%2Fmedia_kit_img1.jpg?alt=media&token=72d3815a-5d9f-4df2-96bf-b8d578c9363e" alt=""  width={100} height={100}/>
			</section>
		</>
	);
};

export default Projects;
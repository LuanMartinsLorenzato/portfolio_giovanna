import { SocialType, tabsType } from "./types";
import zap_img from '../../public/assets/imgs/zap_img.png'
import linkedin_img from '../../public/assets/imgs/linkedin_img.png'

export const tabs: Array<tabsType> = [
  { name: "home", path: "#home" },
  { name: "about", path: "#about" },
  { name: "projects", path: "#projects" },
  { name: "contact_me", path: "#contact" },
];

export const LOCATION: string = 'São Paulo - Brasil';

export const messagesArr: Array<string> = [
	'Oii!! Eu sou estudante de Designer Gráfico e Digital',
	'Comecei minha jornada na área faz pouquíssimo tempo, por isso ainda tenho apenas alguns projetos desenvolvidos e outros ainda em processo de criação. Estou em busca de uma experiencia “oficial” na área para poder desenvolver e aprender muito mais!',
	'Meu objetivo é me tornar UX/UI especialista e poder liderar time de web designers.',
	'Espero poder fazer parte do seu time de Web Designers.',
  '',
]

export const SOCIAL: SocialType[] = [
	{name: 'WhatsApp', value: '(11) 943383791', img: `${zap_img.src}`},
	{name: 'LinkedIn', value: 'www.linkedin.com/in/giovanna-conti-martins',  img: `${linkedin_img.src}`},
]

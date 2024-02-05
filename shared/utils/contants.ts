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

export const messagesArr: Array<string> = ['line_0', 'line_1', 'line_2', 'line_3', '',]

export const SOCIAL: SocialType[] = [
	{name: 'WhatsApp', value: '(11) 943383791', img: `${zap_img.src}`},
	{name: 'LinkedIn', value: 'www.linkedin.com/in/giovanna-conti-martins',  img: `${linkedin_img.src}`},
]

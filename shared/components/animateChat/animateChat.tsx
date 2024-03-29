import styles from './animateChat.module.scss';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import left_mensage_icon_dark from '../../../public/assets/left_mensage_icon_dark.svg'
import left_mensage_icon_light from '../../../public/assets/left_mensage_icon_light.svg'
import Image from "next/image";
import fig_luck from '../../../public/assets/imgs/fig_luck.png'
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';

interface ChatProps {
  messages: (string | JSX.Element)[];
  delayBetweenMessages?: number; // Opcional: Define o atraso entre as mensagens (em segundos)
}

const AnimateChat: React.FC<ChatProps> = ({ messages, delayBetweenMessages = 2 }) => {
	const { theme } = useTheme();
	const _t = useTranslations("About.chat");
  const [visibleMessages, setVisibleMessages] = useState<(string | JSX.Element)[]>([]);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Define a porcentagem de visibilidade necessária
  });

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    const addMessageWithDelay = (index: number) => {
      timer = setTimeout(() => {
        setVisibleMessages((prevMessages) => [...prevMessages, messages[index]]);
      }, index * (delayBetweenMessages * 1000));
    };

    if (inView) {
      messages.forEach((_, index) => {
        addMessageWithDelay(index);
      });
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [inView, messages, delayBetweenMessages]);

  return (
    <div className={styles.container_messages} ref={ref}>
      <div className={styles.position_messages}>
        {visibleMessages.map((message, i) => (
          <motion.div
            className={theme == 'dark' ? styles.message_darkMode : styles.message}
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }} // Duração da animação
          >
            <>
              <Image src={theme == 'dark' ? left_mensage_icon_dark : left_mensage_icon_light} alt="Left icon" className={styles.left_mensage} />
              {i === 4 ? (
                <Image src={fig_luck} alt='Luck' className={styles.img} />
              ) :
                (
                  <p>{_t(message)}</p>
                )
              }
            </>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnimateChat;
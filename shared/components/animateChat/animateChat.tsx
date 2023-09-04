import styles from './animateChat.module.scss';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import left_mensage_icon_dark from '../../../public/assets/left_mensage_icon_dark.svg'

interface ChatProps {
  messages: (string | JSX.Element)[];
  delayBetweenMessages?: number; // Opcional: Define o atraso entre as mensagens (em segundos)
}

const AnimateChat: React.FC<ChatProps> = ({ messages, delayBetweenMessages = 2 }) => {
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
        {visibleMessages.map((message, index) => (
          <motion.div
            className={styles.message}
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }} // Duração da animação
          >
            {typeof message === 'string' ? (
              <>
                <img src={left_mensage_icon_dark.src} alt="Left icon" className={styles.left_mensage}/>
                <p>{message}</p>
              </>
            ) : ( 
            <> 
              <img src={left_mensage_icon_dark.src} alt="Left icon" className={styles.left_mensage}/>
              {message}
            </>  
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnimateChat;
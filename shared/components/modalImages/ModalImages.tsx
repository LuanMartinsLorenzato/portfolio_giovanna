import styles from './modalImages.module.scss';
import React from 'react';
import close_menu_icon_black from '../../../public/assets/close-menu-icon-black.svg'
interface ModalInterface {
  images: Array<string> | undefined;
  closeModal: () => void;
}
const ModalImages: React.FC<ModalInterface> = ({images, closeModal}) => {
  return (
    <div className={styles.container_modal}>
      <div className={styles.blur_overlay} />
      <button onClick={() => closeModal()}>
        <img src={close_menu_icon_black.src} alt="Close modal" loading='lazy' height={20} width={20} />
      </button>
      {images?.map((url, i) => (
        <img src={url} alt="Images" key={i} loading='lazy' />
      ))}
      {!images ? (
        <>
          <div className={styles.error_notImages}>Não há imagens neste projeto</div>
        </>
      ) : null}
    </div>
  );
};

export default ModalImages;
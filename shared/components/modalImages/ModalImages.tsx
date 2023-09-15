import { unmountComponentAtNode } from 'react-dom';
import styles from './modalImages.module.scss';
import React from 'react';
interface ModalInterface {
  images: Array<string> | undefined;
  closeModal: () => void;
}
const ModalImages: React.FC<ModalInterface> = ({images, closeModal}) => {
  console.log(images)
  return (
    <div className={styles.container_modal}>
      <button onClick={() => closeModal()} />
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
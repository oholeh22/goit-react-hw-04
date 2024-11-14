import Modal from '../ImageModal/Modal'; 
import { useState } from 'react';
import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard'; 

const ImageGallery = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [modalImage, setModalImage] = useState(null); 

  const openModal = (image) => {
    setModalImage(image); 
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false); 
  };

  const imageList = Array.isArray(images) ? images : [];

  return (
    <>
      <ul className={css.gallery}>
        {imageList.map(({ alt_description, urls, id, user, likes }) => (
          <li 
            key={id} 
            className={css.galleryItem} 
            onClick={() => openModal({ alt_description, urls, user, likes })}
          >
            <ImageCard 
              src={urls.regular} 
              alt={alt_description} 
              avgColor={urls.regular}
            />
          </li>
        ))}
      </ul>

      {isModalOpen && <Modal image={modalImage} closeModal={closeModal} />}
    </>
  );
};

export default ImageGallery;


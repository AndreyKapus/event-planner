import { useState } from 'react';
import Modal from 'react-modal';
import avatarImages from '../../Colections/AvatarImages'
import {ImageList, ImageItem} from './CreateEvent.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('body');

const ImageModal = ({modalIsOpen, setIsOpen}) => {
  let subtitle;
  

//   function openModal() {
//     setIsOpen(true);
//   }

//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     subtitle.style.color = '#f00';
//   }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ImageList>
            <ImageItem onClick={(e) => console.log(e.target)}>
                <img src={avatarImages.business} alt='business'/>
            </ImageItem>
            <ImageItem onClick={(e) => console.log(e.target)}>
                <img src={avatarImages.art} alt='art'/>
            </ImageItem>
            <ImageItem onClick={(e) => console.log(e.target)}>
                <img src={avatarImages.sport} alt='sport'/>
            </ImageItem>
            <ImageItem onClick={(e) => console.log(e.target)}>
                <img src={avatarImages.music} alt='music'/>
            </ImageItem>
            <ImageItem onClick={(e) => console.log(e.target)}>
                <img src={avatarImages.workshop} alt='workshop'/>
            </ImageItem>
            <ImageItem onClick={(e) => console.log(e.target)}>
                <img src={avatarImages.conference} alt='conference'/>
            </ImageItem>
        </ImageList>
      </Modal>
    </div>
  );
};

export default ImageModal;

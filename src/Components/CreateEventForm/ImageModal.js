
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

Modal.setAppElement('body');

const ImageModal = ({modalIsOpen, setIsOpen, setPicture}) => {

const handleClick = (e) => {
  const name = e.currentTarget.id;
  
  switch(name) {
    case 'business':
      setPicture(e.target.src);
      setIsOpen(false)
    break;

    case 'art':
      setPicture(e.target.src);
      setIsOpen(false);
    break;

    case 'sport':
      setPicture(e.target.src);
      setIsOpen(false);
    break;

    case 'music':
      setPicture(e.target.src);
      setIsOpen(false);
    break;

    case 'workshop':
      setPicture(e.target.src);
      setIsOpen(false);
    break;

    case 'conference':
      setPicture(e.target.src);
      setIsOpen(false);
    break;

    default: return
  }
} 

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ImageList>
            <ImageItem  id='business' onClick={handleClick} >
                <img src={avatarImages.business} alt='business'/>
            </ImageItem>
            <ImageItem  id='art' onClick={handleClick} >
                <img src={avatarImages.art} alt='art' />
            </ImageItem>
            <ImageItem id='sport' onClick={handleClick} >
                <img src={avatarImages.sport} alt='sport'/>
            </ImageItem>
            <ImageItem id='music' onClick={handleClick}>
                <img src={avatarImages.music} alt='music' />
            </ImageItem>
            <ImageItem id='workshop' onClick={handleClick}>
                <img src={avatarImages.workshop} alt='workshop' />
            </ImageItem>
            <ImageItem  id='conference' onClick={handleClick}>
                <img src={avatarImages.conference} alt='conference'/>
            </ImageItem>
        </ImageList>
      </Modal>
    </div>
  );
};

export default ImageModal;

import { useState } from "react";
import { FormLabel, DownloadImageBtn } from "./CreateEvent.styled";
import ImageModal from "./ImageModal";

const ImageDownload = ({handleChange, setPicture}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(true);
    };

    return (
        <>
            <FormLabel>Select image</FormLabel>
                <DownloadImageBtn type='button' name='picture' id="picture" onClick={handleClick}>
                    Select
                </DownloadImageBtn>
                <ImageModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} setPicture={setPicture}/>
        </>
    )
};

export default ImageDownload;
import { useState } from "react";
import { FormLabel, DownloadImageBtn } from "./CreateEvent.styled";
import ImageModal from "./ImageModal";

const ImageDownload = ({handleChange}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    return (
        <>
            <FormLabel>Select image</FormLabel>
                <DownloadImageBtn type='button' onClick={() => setIsOpen(true)}>
                    Select
                </DownloadImageBtn>
                <ImageModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/>
        </>
    )
};

export default ImageDownload;
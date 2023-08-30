import { useState } from "react";
import { FormLabel, DownloadImageBtn } from "./CreateEvent.styled";
import ImageModal from "./ImageModal";
import { useTranslation } from "react-i18next";

const ImageDownload = ({setPicture}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const {t} = useTranslation();

    const handleClick = () => {
        setIsOpen(true);
    };

    return (
        <>
            <FormLabel>{t("create-event-image")}</FormLabel>
                <DownloadImageBtn type='button' name='picture' id="picture" onClick={handleClick}>
                    {t("image-placeholder")}
                </DownloadImageBtn>
                <ImageModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} setPicture={setPicture}/>
        </>
    )
};

export default ImageDownload;
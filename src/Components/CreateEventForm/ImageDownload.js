import { FormLabel, FormInput, DownloadImageBtn } from "./CreateEvent.styled";

const ImageDownload = ({handleChange}) => {
    return (
        <>
            <FormLabel>Select image</FormLabel>
                <DownloadImageBtn type='button'>
                    Select
                </DownloadImageBtn>
            
        </>
    )
};

export default ImageDownload;
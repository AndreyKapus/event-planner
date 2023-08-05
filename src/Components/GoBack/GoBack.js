import { useNavigate } from 'react-router-dom';
import GoBackIcon from './GoBackIcon';
import { BackBtn, BackText } from './GoBack.styled';

const GoBackBtn = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <>
            <BackBtn type="button" onClick={goBack}>
                <GoBackIcon/>
                <BackText>Back</BackText>
            </BackBtn>
        </>
    )
};

export default GoBackBtn;
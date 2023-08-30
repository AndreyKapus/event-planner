import { useNavigate } from 'react-router-dom';
import GoBackIcon from './GoBackIcon';
import { BackBtn, BackText } from './GoBack.styled';
import { useTranslation } from 'react-i18next';

const GoBackBtn = () => {
    const navigate = useNavigate();

    const {t} = useTranslation()

    const goBack = () => navigate(-1);

    return (
        <>
            <BackBtn type="button" onClick={goBack}>
                <GoBackIcon/>
                <BackText>{t("go-back")}</BackText>
            </BackBtn>
        </>
    )
};

export default GoBackBtn;
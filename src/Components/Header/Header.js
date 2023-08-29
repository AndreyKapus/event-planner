import { Outlet } from 'react-router-dom';
import {Container,
        Wrapper,
        Title,
        HeaderWrapper,
} from './Header.styled'
import SearchInput from './SearchInput';
import { useTranslation } from 'react-i18next';
import ChangeLanguege from './ChangeLanguege';
import { useLang } from '../../Store/LanguegeStore.js';

const Header = () => {
    const {t, i18n} = useTranslation();
    const lang = useLang((state) => state.lang);
    const changeLeng = useLang(state => state.setLang)

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        changeLeng(language)
    };

    return (
            <Container>
                <HeaderWrapper>
                    <Wrapper>
                        <Title to='/'>{t('title')}</Title>
                    </Wrapper>
                    <ChangeLanguege lang={lang} changeLanguage={changeLanguage}/>
                    <SearchInput/>
                </HeaderWrapper>
                <Outlet/>
            </Container>
    )
};

export default Header;
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
import { useState } from 'react';

const Header = () => {
    const {t, i18n} = useTranslation();
    const lang = useLang((state) => state.lang);
    const changeLeng = useLang(state => state.setLang);
    const [dropDownIsOpen, setDropDownIsOpen] = useState(false)

    const toggleDropDown = (e) => {
        dropDownIsOpen ? setDropDownIsOpen(false) : setDropDownIsOpen(true);
    };

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        changeLeng(language);
        setDropDownIsOpen(false)
    };

    return (
            <Container>
                <HeaderWrapper>
                    <Wrapper>
                        <Title to='/'>{t('title')}</Title>
                    </Wrapper>
                    <ChangeLanguege lang={lang} dropDownIsOpen={dropDownIsOpen} changeLanguage={changeLanguage} toggleDropDown={toggleDropDown}/>
                    <SearchInput/>
                </HeaderWrapper>
                <Outlet/>
            </Container>
    )
};

export default Header;
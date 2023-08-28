import { Outlet } from 'react-router-dom';
import {Container,
        Wrapper,
        Select,
        Title,
        Options,
        HeaderWrapper,
} from './Header.styled'
import SearchInput from './SearchInput';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const {t, i18n} = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    }

    return (
            <Container>
                <HeaderWrapper>
                    <Wrapper>
                        <Title to='/'>{t('title')}</Title>
                        <Select onChange={(e) => changeLanguage(e.value)}>
                            <Options type='button' onClick={() => changeLanguage('en')} value='EN'>EN</Options>
                            <Options type='button' onClick={() => changeLanguage('ua')} value='UK'>UA</Options>
                        </Select>
                    </Wrapper>
                    <SearchInput/>
                </HeaderWrapper>
                <Outlet/>
            </Container>
    )
};

export default Header;
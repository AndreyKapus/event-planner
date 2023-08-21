import { Outlet } from 'react-router-dom';
import {Container,
        Wrapper,
        Select,
        Title,
        Options,
        HeaderWrapper,
} from './Header.styled'
import SearchInput from './SearchInput';

const Header = () => {
    return (
            <Container>
                <HeaderWrapper>
                    <Wrapper>
                        <Title to='/'>Event planner</Title>
                        <Select>
                            <Options value='UK'>UK</Options>
                            <Options value='UK'>UA</Options>
                        </Select>
                    </Wrapper>
                    <SearchInput/>
                </HeaderWrapper>
                <Outlet/>
            </Container>
    )
};

export default Header;
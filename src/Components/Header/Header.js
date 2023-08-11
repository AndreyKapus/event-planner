import { Outlet } from 'react-router-dom';
import {Container,
        Wrapper,
        Select,
        Title,
        Input,
        Options,
        HeaderWrapper,
} from './Header.styled'
import IconSearch from '../../Icons/IconSearch';

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
                    <span><IconSearch/></span>
                    <Input type="text" placeholder="Search by keywords"/> 
                </HeaderWrapper>
                <Outlet/>
            </Container>
    )
};

export default Header;
import { Outlet } from 'react-router-dom';
import {Container,
        Wrapper,
        Select,
        Title,
        Input,
        Options,
  
} from './Header.styled'

const Header = () => {
    return (
            <Container>
                <Wrapper>
                    <Title>Event planner</Title>
                    <Select>
                        <Options value='UK'>UK</Options>
                        <Options value='UK'>UA</Options>
                    </Select>
                </Wrapper>
                <Input type="text" placeholder="search by tags"/> 
                <Outlet/>
            </Container>
    )
};

export default Header;
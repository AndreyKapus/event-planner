import styled from '@emotion/styled'
import background from '../src/Images/background.jpg'

export const MainContainer = styled.div`
box-sizing: border-box;
width: 100%;
padding-left: 20px;
padding-right: 20px;
margin: 0 auto;
width: ${p => p.theme.screens.mobWidth};
margin-left: auto;
margin-right: auto;
padding-bottom: 24px;

@media screen and (min-width: ${p => p.theme.screens.tabWidth}) {
    width: ${p => p.theme.screens.tabWidth};
    padding-left: 40px;
    padding-right: 40px;
};

@media screen and (min-width: ${p => p.theme.screens.deskWidth}) {
    width: ${p => p.theme.screens.deskWidth};
    padding-left: 0px;
    padding-right: 0px;
};
`;

export const ContainerWrapper = styled.div`
    padding-top: 64px;
    height: 100vh;
    background-image: url(${background});
    background-size: cover;

`;

export const HeaderContainer = styled.div`
&::after {
    content: " ";
    position: absolute;
    left: 0px;
    right: 0px;
    top: 168px;
    border-bottom: 1px solid ${p => p.theme.colors.accent};

    @media screen and (min-width: ${p => p.theme.screens.tabWidth}) {
        top: 92px;
    }
};
`
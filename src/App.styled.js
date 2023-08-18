import styled from '@emotion/styled'

export const Container = styled.div`
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
    padding-left: 80px;
    padding-right: 80px;
};
`
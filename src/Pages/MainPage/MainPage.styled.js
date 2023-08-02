import styled from '@emotion/styled';

export const MainContainer = styled.div`
    width: ${p => p.theme.screens.mobWidth};
    margin-top: 24px;
    margin-bottom: 24px;
    margin-left: auto;
    margin-right: auto;

    @media screen and (min-width: ${p => p.theme.screens.tabWidth}) {
        width: ${p => p.theme.screens.tabWidth};
    };

    @media screen and (min-width: ${p => p.theme.screens.deskWidth}) {
        width: ${p => p.theme.screens.deskWidth};
    };
`
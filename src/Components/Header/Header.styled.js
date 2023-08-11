import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.header`
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    padding-right: 24px;
    

    @media screen and (min-width: ${p => p.theme.screens.tabWidth}) {
        padding-left: 40px;
        padding-right: 40px;
    };

    @media screen and (min-width: ${p => p.theme.screens.deskWidth}) {
        padding-left: 80px;
        padding-right: 80px;
    };
    
    &::after {
        content: " ";
        position: absolute;
        width: 100%;
        left: 0px;
        right: 0px;
        top: 168px;
        border-bottom: 1px solid ${p => p.theme.colors.accent};

        @media screen and (min-width: ${p => p.theme.screens.tabWidth}) {
            top: 92px;
        }
    };

    @media screen and (min-width: ${p => p.theme.screens.tabWidth}) {
        position: relative;
    };
`;

export const HeaderWrapper = styled.div`
    @media screen and (min-width: ${p => p.theme.screens.tabWidth}) {
        display: flex;
        justify-content: space-between;
    };
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled(NavLink)`
    font-family: Alata;
    font-size: ${p => p.theme.fontSizes.titleSize};
    font-weight: ${p => p.theme.fontWaight.regular};
    color: ${p => p.theme.colors.accent};
    text-decoration: none;


    @media screen and (min-width: ${p => p.theme.screens.tabWidth}) {
       
    };
`;

export const Select = styled.select`
    padding: 12px;
    border: none;
    border-radius: 8px;
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
    font-size: ${p => p.theme.fontSizes.subtitleSize};
    font-weight: ${p => p.theme.fontWaight.medium};
    color: ${p => p.theme.colors.secondaryText};

    @media screen and (min-width: ${p => p.theme.screens.tabWidth}) {
        position: absolute;
        right: 40px;
    };

    @media screen and (min-width: ${p => p.theme.screens.deskWidth}) {
        right: 80px;
    };
`;

export const Options = styled.option`
    font-size: ${p => p.theme.fontSizes.subtitleSize};
    font-weight: ${p => p.theme.fontWaight.medium};
    color: ${p => p.theme.colors.primaryText};
`;

export const Input = styled.input`
    width: 260px;
    height: 48px;
    margin-top: 24px;
    border: none;
    border-radius: 10px;
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
    padding-left: 10px;

    @media screen and (min-width: ${p => p.theme.screens.tabWidth}) {
        width: 368px;
        margin-top: 0px;
        margin-right: 94px;
    };

    @media screen and (min-width: ${p => p.theme.screens.deskWidth}) {
        width: 410px;
    };
`;
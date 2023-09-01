import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.header`
    box-sizing: border-box;
    width: 100%;
    padding-top: 26px;
    padding-bottom: 18px;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
    width: ${p => p.theme.screens.mobWidth};
    margin-left: auto;
    margin-right: auto;
    
    @media screen and (min-width: ${p => p.theme.screens.tabWidth}) {
        width: ${p => p.theme.screens.tabWidth};
        padding-left: 40px;
        padding-right: 40px;

    };
    @media screen and (min-width: ${p => p.theme.screens.deskWidth}) {
        width: ${p => p.theme.screens.deskWidth};
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

export const SelectWrapper = styled.div`
    position: relative;
    border: none;
    border-radius: 8px;
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
    font-size: ${p => p.theme.fontSizes.subtitleSize};
    font-weight: ${p => p.theme.fontWaight.medium};
    color: ${p => p.theme.colors.secondaryText};
    z-index: 1;

    @media screen and (min-width: ${p => p.theme.screens.tabWidth}) {
        position: absolute;
        right: 0px;
    };

    @media screen and (min-width: ${p => p.theme.screens.deskWidth}) {
        right: 0px;
    };
`;

export const SelectBtn = styled.div`
    padding: 15px;
    border: none;
    border-radius: 8px;
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
    font-size: ${p => p.theme.fontSizes.subtitleSize};
    font-weight: ${p => p.theme.fontWaight.medium};
    color: ${p => p.theme.colors.secondaryText};
    cursor: pointer;
`;

export const OptionsWrapper = styled.div`
    position: absolute;
    top: 110%;
    width: 100%;
    border: none;
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
    border-radius: 8px;
    background-color: ${p => p.theme.colors.white};
`;

export const Options = styled.div`
    padding: 10px;
    font-size: ${p => p.theme.fontSizes.subtitleSize};
    font-weight: ${p => p.theme.fontWaight.medium};
    color: ${p => p.theme.colors.primaryText};
    cursor: pointer;
    &:not(:last-child) {
        border-bottom: 1px solid #ACA7C3;
    };
`;

export const InputWrapper = styled.div`
    box-sizing: border-box;
    position: relative;
    
`;

export const Input = styled.input`
    width: calc(100% - 50px);
    height: 48px;
    margin-top: 24px;
    border: none;
    border-radius: 10px;
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
    padding-left: 48px;

    @media screen and (min-width: ${p => p.theme.screens.tabWidth}) {
        width: 368px;
        margin-top: 0px;
        margin-right: 40px;
    };

    @media screen and (min-width: ${p => p.theme.screens.deskWidth}) {
        width: 410px;
    };
`;

export const IconWrapper = styled.span`
    position: absolute;
    top: 50%;
    left: 12px;
    pointer-events: none;

    @media screen and (min-width: ${p => p.theme.screens.tabWidth}) {
        top: 12px;
    };

    @media screen and (min-width: ${p => p.theme.screens.deskWidth}) {
        top: 12px;
    };
`;
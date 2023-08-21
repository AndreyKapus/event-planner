import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const Container = styled.div`
    width: 216px;
    margin-left: auto;

    @media screen and (min-width: 768px) {
        width: 513px;
    };
`;

export const ControlsWrapper = styled.div`
    display: flex;
    justify-content: end;
    margin-top: 0px;
    position: relative;
`;

export const AddBtn = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55px;
    height: 55px;
    border: none;
    border-radius: 8px;
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
    background-color: ${p => p.theme.colors.accent};
    margin-left: 24px;
    text-decoration: none;
    &:hover {
        background-color: ${p => p.theme.colors.hover};
    };
    transition-property: background-color;
    transition-duration: 250ms;
    transition-timing-function: linear;

    @media screen and (min-width: ${p => p.theme.screens.tabWidth}) {
        width: 193px;
        justify-content: space-around;

    };
`;

export const AddBtnText = styled.span`
    display: none;

    @media screen and (min-width: ${p => p.theme.screens.tabWidth}) {
        display: block;
        font-size: ${p => p.theme.fontSizes.subtitleSize};
        font-weight: ${p => p.theme.fontWaight.medium};
        color: ${p => p.theme.colors.white};
    };
`;
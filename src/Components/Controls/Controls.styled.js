import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const ControlsWrapper = styled.div`
    display: flex;
    justify-content: end;
    margin-top: 64px;
    padding-right: 24px;
`;

export const CategoryBtn = styled.button`
    width: 56px;
    height: 56px;
    border: none;
    border-radius: 8px;
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
    background-color: ${p => p.theme.colors.white};
`;

export const SortBtn = styled.button`
    width: 56px;
    height: 56px;
    border: none;
    border-radius: 8px;
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
    background-color: ${p => p.theme.colors.white};
    margin-left: 24px;
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
`;
import styled from '@emotion/styled';

export const Wrapper = styled.div`
    position: relative;
`;

export const SortBtnStyled = styled.button`
    width: 56px;
    height: 56px;
    border: none;
    border-radius: 8px;
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
    background-color: ${p => p.theme.colors.white};
    margin-left: 24px;
`;

export const Dropdown = styled.div`
    position: absolute;
    top: 56px;
    width: 170px;
    visibility: ${(props) => !props.isOpen ? 'hidden' : 'visible'};
    opacity: ${(props) => !props.isOpen ? '0' : '1'};
    background-color: ${p => p.theme.colors.white};
`;

export const DropList = styled.ul`
    list-style: none;
    border: 1px solid black;
`;

export const DropListItem = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid black;
`;

export const DropListText = styled.p`
    font-size: ${p => p.theme.fontSizes.textSize};
    font-weight: ${p => p.theme.fontWaight.fontWaight};
    color: ${p => p.theme.colors.primaryText};
`;
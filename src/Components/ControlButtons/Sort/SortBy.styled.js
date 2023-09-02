import styled from '@emotion/styled';

export const Wrapper = styled.div`
    position: relative;
`;

export const SortBtnStyled = styled.button`
    position: absolute;
    right: 50%;
    width: ${(props) => !props.isOpen ? '56px' : '170px'};
    height: 56px;
    border: none;
    border-bottom: ${(props) => !props.isOpen ? 'none' : '1px solid #ACA7C3'};
    border-radius: ${(props) => !props.isOpen ? '8px' : '8px 8px 0px 0px;'};
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
    background-color: ${p => p.theme.colors.white};
    visibility: ${(props) => props.isFilterOpen ? 'hidden' : 'visible'};
    opacity: ${(props) => props.isFilterOpen ? '0' : '1'};
    padding: 16px;
    cursor: pointer;

    @media screen and (min-width: 768px) {
        width: 129px;
        visibility: visible;
        opacity: 1;
    };
`;

export const BtnContent = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
        &:hover {
        color: ${p => p.theme.colors.accent}
    };
    transition-property: color;
    transition-duration: 250ms;
    transition-timing-function: linear;
`;

export const BtnContentText = styled.p`
    display: ${(props) => !props.isFilterOpen ? 'none' : 'block'};

    @media screen and (min-width: ${p => p.theme.screens.tabWidth}) {
        display: block;
    };
`;


export const Dropdown = styled.div`
    position: absolute;
    z-index: 1;
    right: 50%;
    top: 56px;
    width: 170px;
    visibility: ${(props) => !props.isOpen ? 'hidden' : 'visible'};
    opacity: ${(props) => !props.isOpen ? '0' : '1'};
    background-color: ${p => p.theme.colors.white};

    @media screen and (min-width: 768px) {
        display: block;
        width: 129px;
    };
`;

export const DropList = styled.ul`
    list-style: none; 
`;

export const DropListItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 24px;
    padding-right: 24px;
    border-bottom: 1px solid ${p => p.theme.colors.primaryText};
`;

export const DropListText = styled.p`
    font-size: ${p => p.theme.fontSizes.textSize};
    font-weight: ${p => p.theme.fontWaight.fontWaight};
    color: ${p => p.theme.colors.primaryText};
`;
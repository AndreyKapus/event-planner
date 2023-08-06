import styled from '@emotion/styled';

export const Container = styled.div`
    position: absolute;
    left: 0px;
`

export const Wrapper = styled.div`
    position: relative;
`;

export const CategoryBtn = styled.button`
    position: absolute;
    width: ${(props) => !props.isOpen ? '56px' : '158px'};
    height: 56px;
    border: none;
    border-bottom: ${(props) => !props.isOpen ? 'none' : '1px solid #ACA7C3'};
    border-radius: ${(props) => !props.isOpen ? '8px' : '8px 8px 0px 0px'};
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
    background-color: ${p => p.theme.colors.white};
    padding: 16px;

    @media screen and (min-width: 768px) {
        justify-content: space-between;
        display: block;
        width: 143px;
    };
`;

export const BtnContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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
    top: 56px;
    width: 158px;
    visibility: ${(props) => !props.isOpen ? 'hidden' : 'visible'};
    opacity: ${(props) => !props.isOpen ? '0' : '1'};
    background-color: ${p => p.theme.colors.white};

    @media screen and (min-width: 768px) {
        width: 143px;
    };
`;

export const DropList = styled.ul`
    list-style: none;
`;

export const DropListItem = styled.li`
    display: flex;
    align-items: center;
    padding-top: 9px;
    padding-bottom: 9px;
    padding-left: 24px;
    border-bottom: 1px solid ${p => p.theme.colors.primaryText};
`;

export const DropListText = styled.p`
    font-size: ${p => p.theme.fontSizes.textSize};
    font-weight: ${p => p.theme.fontWaight.fontWaight};
    color: ${p => p.theme.colors.primaryText};
`;
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
    width: ${(props) => !props.isOpen ? '56px' : '170px'};
    height: 56px;
    border: none;
    border-radius: 8px;
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
    background-color: ${p => p.theme.colors.white};
`;

export const BtnContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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
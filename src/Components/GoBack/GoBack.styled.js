import styled from '@emotion/styled';

export const BackBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    padding: 0px;
`;

export const BackText = styled.span`
    margin-left: 8px;
    font-weight: ${p => p.theme.fontWaight.medium};
    font-size: ${p => p.theme.fontSizes.textSize};
    color: ${p => p.theme.colors.accent};
`;
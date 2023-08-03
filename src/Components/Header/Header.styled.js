import styled from '@emotion/styled';

export const Container = styled.header`
    padding-left: 24px;
    padding-right: 24px;
    
    &::after {
        content: " ";
        position: absolute;
        width: 100%;
        left: 0px;
        right: 0px;
        top: 168px;
        border-bottom: 1px solid ${p => p.theme.colors.accent};
    };
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: ${p => p.theme.fontSizes.titleSize};
    color: ${p => p.theme.colors.accent}
`;

export const Select = styled.select`
    padding: 12px;
    border: none;
    border-radius: 8px;
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
    font-size: ${p => p.theme.fontSizes.subtitleSize};
    font-weight: ${p => p.theme.fontWaight.medium};
    color: ${p => p.theme.colors.secondaryText};
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
`;
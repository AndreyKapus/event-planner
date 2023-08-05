import styled from '@emotion/styled';

export const EventPageErapper = styled.div`
    margin-top: 64px;
`;

export const EventWrapper = styled.div`
    border: none;
    border-radius: 8px;
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
    background-color: ${p => p.theme.colors.white};
`;

export const EventTitle = styled.h3`
    margin-top: 24px;
    font-weight: ${p => p.theme.fontWaight.semibold};
    font-size: ${p => p.theme.fontSizes.titleSize};
    color: ${p => p.theme.colors.secondaryText};
`;

export const Image = styled.div`
    margin-top: 24px;
    border-radius: 8px;
`;

export const DescriptionWrapper = styled.div`
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 16px;
    padding-right: 16px;
`;

export const DescriptionText = styled.div`
    font-weight: ${p => p.theme.fontWaight.regular};
    font-size: ${p => p.theme.fontSizes.textSize};
    color: ${p => p.theme.colors.textColor};
`;

export const DetailsList = styled.ul`
    display: flex;
    margin-top: 24px;
    list-style: none;
`;

export const DetailsItem = styled.li`
    box-shadow: 4px 5px 9px 0px rgba(166, 141, 174, 0.28);
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 8px;

    &:not(:last-child) {
        margin-right: 12px;
    };

    font-weight: ${p => p.theme.fontWaight.medium};
    font-size: ${p => p.theme.fontSizes.textSize};
    color: ${p => p.theme.colors.accent};
`;

export const EventTime = styled.p`
    display: inline-block;
    box-shadow: 4px 5px 9px 0px rgba(166, 141, 174, 0.28);
    margin-top: 12px;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 8px;

    font-weight: ${p => p.theme.fontWaight.regular};
    font-size: ${p => p.theme.fontSizes.textSize};
    color: ${p => p.theme.colors.accent};
`;




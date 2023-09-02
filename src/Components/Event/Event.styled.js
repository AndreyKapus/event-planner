import styled from '@emotion/styled';

export const EventPageErapper = styled.div`
    margin-top: 0px;
`;

export const EventContainer = styled.div`
@media screen and (min-width: ${p => p.theme.screens.tabWidth}) {
    width: 628px;
    height: auto;
    margin-left: auto;
    margin-right: auto;

    @media screen and (min-width: ${p => p.theme.screens.deskWidth}) {
        width: 628px;

    };
};
`;

export const ControlsWrapper = styled.div`
        padding-top: 24px;
        padding-left: 24px;
        padding-right: 24px;
        padding-bottom: 70px;

    @media screen and (min-width: ${p => p.theme.screens.tabWidth}) {
        padding-top: 24px;
        padding-left: 24px;
        padding-right: 24px;
        padding-bottom: 70px;
    };

    @media screen and (min-width: ${p => p.theme.screens.deskWidth}) {
        padding-top: 24px;
        padding-left: 40px;
        padding-right: 40px;
        padding-bottom: 70px;
    };
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
    width: 100%;
    height: 168px;
   
    overflow: hidden;
    margin-top: 24px;
    border-radius: 8px;

    @media screen and (min-width: ${p => p.theme.screens.tabWidth}) {
        width: 100%;
        height: 272px;
    };

    @media screen and (min-width: ${p => p.theme.screens.deskWidth}) {
        width: 100%;
    };
`;

export const DescriptionWrapper = styled.div`
`;

export const DescriptionContainer = styled.div`

    @media screen and (min-width: ${p => p.theme.screens.tabWidth}) {
        display: flex;
        align-items: center;
};
`;

export const DescriptionText = styled.div`
    font-weight: ${p => p.theme.fontWaight.regular};
    font-size: ${p => p.theme.fontSizes.textSize};
    color: ${p => p.theme.colors.textColor};
`;

export const DetailsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 24px;
    list-style: none;
    margin-bottom: 40px;

    @media screen and (min-width: ${p => p.theme.screens.tabWidth}) {
    };

    @media screen and (min-width: ${p => p.theme.screens.tabWidth}) {
        margin-bottom: 40px;
    };
`;

export const DetailsItem = styled.li`
    box-shadow: 4px 5px 9px 0px rgba(166, 141, 174, 0.28);
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 8px;


    font-weight: ${p => p.theme.fontWaight.medium};
    font-size: ${p => p.theme.fontSizes.textSize};
    color: ${p => p.theme.colors.accent};
`;

export const DeleteEventBtn = styled.button`
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 16px;
    padding-right: 16px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
    float: right;
    &:hover {
        background-color: ${p => p.theme.colors.hover};
    };
    transition-property: background-color;
    transition-duration: 250ms;
    transition-timing-function: linear;
`;




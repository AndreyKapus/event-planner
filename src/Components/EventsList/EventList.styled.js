
import styled from "@emotion/styled/macro";
import { NavLink } from "react-router-dom";

export const EventSection = styled.section`
    margin-top: 40px;
    @media screen and (min-width: ${p => p.theme.screens.deskWidth}) {
        margin-top: 0px;
    };
`;

export const EventListTittle = styled.h2`
    display: none;

    @media screen and (min-width: ${p => p.theme.screens.tabWidth}) {
        display: block;
        font-weight: ${p => p.theme.fontWaight.semibold};
        font-size: ${p => p.theme.fontSizes.maxSize};
    };
`;

export const MoreInfoBtn = styled(NavLink)`
    display: none;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 24px;
    padding-right: 24px;
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
    border: none;
    border-radius: 8px;
    font-weight: ${p => p.theme.fontWaight.medium};
    font-size: ${p => p.theme.fontSizes.textSize};
    text-decoration: none;
    &:hover {
        background-color: ${p => p.theme.colors.hover};
    };
    transition-property: background-color;
    transition-duration: 250ms;
    transition-timing-function: linear;
`;

export const EventList = styled.ul`
    @media screen and (min-width: ${p => p.theme.screens.tabWidth}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    margin-top: 24px;
    padding-left: 0px;
    padding-right: 0px;
    justify-content: start;
};

@media screen and (min-width: ${p => p.theme.screens.deskWidth}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    margin-top: 24px;
    padding-left: 0px;
    padding-right: 0px;
    justify-content: start;
};
`

export const EventCard = styled.li`
    position: relative;
    max-width: 272px;
    height: 480px;
    margin-top: 24px;
    margin-left: auto;
    margin-right: auto;
    list-style: none;
    background-color: ${p => p.theme.colors.white};
   
    border-radius: 12px;
    margin-bottom: 24px;
    cursor: pointer;
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

    &:hover .more {
        display: block;
        position: absolute;
        bottom: 16px;
        right: 16px;
    };

    &:hover .imageWrapper {
        position: static;
    };

    &:hover .MeetInfoWrapper {
        top: 200px;
        @media screen and (min-width: ${p => p.theme.screens.tabWidth}) {
            top: 240px;
            };
            @media screen and (min-width: ${p => p.theme.screens.deskWidth}) {
                top: 210px;
                };
    };

    &:hover .EventDescrWrapper {
        box-sizing: border-box;
        backGround-color: white;
        position: absolute;
        top: 240px;
        width: 280px;

        @media screen and (min-width: ${p => p.theme.screens.tabWidth}) {
        top: 280px;
        width: 334px;
        };

        @media screen and (min-width: ${p => p.theme.screens.deskWidth}) {
            top: 250px;
            width: 302px;
            };
    };

    @media screen and (min-width: ${p => p.theme.screens.tabWidth}) {
        max-width: 334px;
        margin-top: 0px;
        margin-left: 0px;
        margin-right: 0px;
        margin-bottom: 0px;
    };
    @media screen and (min-width: ${p => p.theme.screens.deskWidth}) {
        max-width: 302px;
        margin-top: 0px;
        margin-left: 0px;
        margin-right: 0px;
        margin-bottom: 0px;
    };
`;

export const StickersWrapper = styled.div`
    position: absolute;
    top: 12px;
    left: 12px;
    display: flex;
    gap: 12px;
`;

export const Sticker = styled.p`
    border: none;
    border-radius: 8px;
    background-color: ${p => p.theme.colors.white};
    padding-top: 6px;
    padding-bottom: 6px;
    padding-right: 12px;
    padding-left: 12px;
    font-weight: ${p => p.theme.fontWaight.medium};
    font-size: ${p => p.theme.fontSizes.textSize};
    font-family: popins;
    color: ${(props) => {
        switch(props.priority) {
            case 'Low':
                return '#6BD475'
            case 'Medium':
               return '#E2A300'
            case 'High':
                return '#FF2B77'
              
            default: return '#7B61FF';
        };}
    };
`;

export const ImgWrapper = styled.div`
    position: relative;
    margin: 0px;
`;

export const MeetInfoWrapper = styled.div`
    position: absolute;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 40px;
    bottom: 0px;
    display: flex;
    background-color: rgba(255, 255, 255, 0.8);
    color: ${p => p.theme.colors.accent};
    font-weight: ${p => p.theme.fontWaight.regular};
    font-size: ${p => p.theme.fontSizes.textSize};
`;

export const MeetTimeWrapper = styled.div`
    display: flex;
    padding-left: 16px;  
`;

export const MeetDate = styled.p`
    margin-right: 5px;
    `;

export const MeetTime = styled.p`
    
`;

export const MeetLocation = styled.p`
    padding-right: 16px;
    overflow: hidden;
`;

export const EventDescrWrapper = styled.div`
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
    padding-right: 16px;
`;

export const EventTitle = styled.p`
    font-weight: ${p => p.theme.fontWaight.medium};
    font-size: ${p => p.theme.fontSizes.subtitleSize};
    color: ${p => p.theme.colors.titleColor};
    overflow: hidden;
`;

export const EventText = styled.p`
    margin-top: 16px;
    font-weight: ${p => p.theme.fontWaight.regular};
    font-size: ${p => p.theme.fontSizes.textSize};
    color: ${p => p.theme.colors.textColor};
    max-width: 240px;
    max-height: 50px;
    overflow: hidden;
`;



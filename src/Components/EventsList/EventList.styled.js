
import styled from "@emotion/styled/macro";
import defaultImg from '../../Images/default2.jpg'

export const EventSection = styled.section`
    margin-top: 40px;
`;

export const EventListTittle = styled.h2`
    display: none;
`;

export const MoreInfoBtn = styled.button`
    display: none;
`;

export const EventCard = styled.li`
    position: relative;
    width: 271px;
    height: 480px;
    margin-left: auto;
    margin-right: auto;
    list-style: none;
    border: 1px solid black;
    border-radius: 12px;
    margin-bottom: 24px;
    cursor: pointer;

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
    };

    &:hover .EventDescrWrapper {
        backGround-color: white;
        position: absolute;
        top: 240px;
    }
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
`;

export const ImgWrapper = styled.div`
    position: relative;
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
`;

export const EventText = styled.p`
    margin-top: 16px;
    font-weight: ${p => p.theme.fontWaight.regular};
    font-size: ${p => p.theme.fontSizes.textSize};
    color: ${p => p.theme.colors.textColor};
`;



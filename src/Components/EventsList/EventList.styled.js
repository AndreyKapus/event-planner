import styled from '@emotion/styled';

export const EventSection = styled.section`
    margin-top: 40px;
`;

export const EventListTittle = styled.h2`
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
`;

export const Category = styled.p`
    position: absolute;
    top: 12px;
    left: 12px;
    border: none;
    border-radius: 8px;
    background-color: ${p => p.theme.colors.white};
    padding: 10px;
`;
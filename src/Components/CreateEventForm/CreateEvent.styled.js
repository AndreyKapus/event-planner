import styled from '@emotion/styled';

export const CreateEventWrapper = styled.div`
    margin-top: 64px;
`;

export const CreateEventTitle = styled.h3`
    margin-top: 24px;
    font-weight: ${p => p.theme.fontWaight.semibold};
    font-size: ${p => p.theme.fontSizes.titleSize};
`;


export const Form = styled.form`
    background-color: ${p => p.theme.colors.white};
    height: auto;
    margin-top: 24px;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 16px;
    padding-right: 16px;
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

    @media screen and (min-width: ${p => p.theme.screens.tabWidth}) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 24px;
      
       
        justify-self: end;
        align-self: end;

        & .title {
            grid-column: 1 / 1;
            grid-row: 1 / 1;
        };
        & .description {
            grid-column: 1 / 2;
            grid-row: 2 / 4;
        };
        & .date {
            grid-column: 1 / 1;
            grid-row: 4 / 4;
        };
        & .time {
            grid-column: 1 / 1;
            grid-row: 5 / 5;
        };
        & .location {
            grid-column: 2 / 2;
            grid-row: 1 / 5;
        };
        & .category {
            grid-column: 2 / 2;
            grid-row: 2 / 4;
        };
        & .picture {
            grid-column: 2 / 2;
            grid-row: 3 / 4;
        };
        & .priority {
            grid-column: 2 / 2;
            grid-row: 4 / 4;
        };
        & .addBtn {
            grid-column: 2 / 2;
            grid-row: 6 / 6;
        };
    };

    @media screen and (min-width: ${p => p.theme.screens.deskWidth}) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 42px;
      
       
        justify-self: end;
        align-self: end;

        & .title {
            grid-column: 1 / 1;
            grid-row: 1 / 1;
        };
        & .description {
            grid-column: 1 / 1;
            grid-row: 2 / 4;
        };
        & .date {
            grid-column: 2 / 2;
            grid-row: 1 / 1;
        };
        & .time {
            grid-column: 2 / 2;
            grid-row: 2 / 2;
        };
        & .location {
            grid-column: 2 / 2;
            grid-row: 3 / 3;
        };
        & .category {
            grid-column: 3 / 3;
            grid-row: 1 / 1;
        };
        & .picture {
            grid-column: 3 / 3;
            grid-row: 2 / 2;
        };
        & .priority {
            grid-column: 3 / 3;
            grid-row: 3 / 3;
        };
        & .addBtn {
            grid-column: 3 / 3;
            grid-row: 4 / 4;
        };
    };
`;

export const FormLabel = styled.label`
    display: block;
    margin-bottom: 8px;
    font-weight: ${p => p.theme.fontWaight.regular};
    font-size: ${p => p.theme.fontSizes.subtitleSize};
    color: ${p => p.theme.colors.accent};
`;

export const Textarea = styled.textarea`
    display: block;
    width: 100%;
    height: ${(props) => !props.desc ? '56px' : '156px'};
    margin-bottom: 20px;
    padding: 16px 12px 16px 12px;
    border: 1px solid black;
    border-radius: 8px;
    border-color: ${p => p.theme.colors.primaryText};
    box-sizing: border-box;
`;

export const FormInput = styled.input`
    display: block;
    width: 100%;
    height: ${(props) => !props.desc ? '56px' : '156px'};
    margin-bottom: 20px;
    padding: 16px 12px 16px 12px;
    border: 1px solid black;
    border-radius: 8px;
    border-color: ${p => p.theme.colors.primaryText};
    box-sizing: border-box;
`;

export const AddBtn = styled.button`
    width: 100%;
    height: 56px;
    margin-top: 40px;
    border: none;
    border-radius: 8px;
    margin-right: auto;
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
    font-weight: ${p => p.theme.fontWaight.medium};
    font-size: ${p => p.theme.fontSizes.subtitleSize};
    float: right;
    cursor: pointer;
    
    &:hover {
        background-color: ${p => p.theme.colors.hover};
    };
    transition-property: background-color;
    transition-duration: 250ms;
    transition-timing-function: linear;

    @media screen and (min-width: ${p => p.theme.screens.tabWidth}) {
        margin-top: 20px;
    };

    @media screen and (min-width: ${p => p.theme.screens.deskWidth}) {
        margin-top: 40px;
    }
`;



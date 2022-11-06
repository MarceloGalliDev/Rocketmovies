import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Content = styled.div`
    padding: 0 124px;

    > div {
        display: flex;
        justify-content: space-between;
        margin: 50px 0;

        > h1 {
            font-size: 32px;
            line-height: 42px;
            font-weight: 400;
        }
    }

`;

export const NewNote= styled(Link)`
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 207px;
    height: 48px;
    border-radius: 8px;


    svg {
        margin-right: 8px;
    }
`;

/*
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 105px 128px auto 64px;
    grid-template-areas:
        "brand header"
        "menu search"
        "menu content"
        "newnote content"
    ;
*/
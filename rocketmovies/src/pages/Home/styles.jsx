import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Content = styled.div`
    grid-area: content;
    padding: 0 40px;
    overflow-y: auto;
`;

export const NewNote= styled(Link)`
    grid-area: newnote;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    display: flex;
    align-items: center;
    justify-content: center;

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
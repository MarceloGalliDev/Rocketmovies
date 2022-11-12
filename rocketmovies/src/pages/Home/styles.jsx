import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 100px 150px auto;
    grid-template-areas:
        "header"
        "subtitle"
        "content"
    ;
`;

export const Content = styled.div`
    grid-area: content;
    margin: 0 124px;
    padding-right: 10px;
    overflow-y: auto;
    
    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.ORANGE};
        border-radius: 10px;
        
    }
`;

export const SubTitle = styled.div`
    grid-area: subtitle;

    display: flex;
    justify-content: space-between;
    margin: 50px 124px;

    > h1 {
        font-size: 32px;
        line-height: 42px;
        font-weight: 400;
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


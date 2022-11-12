import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-rows: 100px 120px auto;
    grid-template-areas:
        "header"
        "buttonback"
        "content" 
    ;

    .buttonBack {
        margin: 0 124px;
    }
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
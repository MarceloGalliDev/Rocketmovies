import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-rows: 80px 40px auto;
    grid-template-areas:
        "header"
        "buttonback"
        "content" 
    ;

    .buttonBack {
        margin: 24px 0px;
    }

    > main {
        grid-area: content;
        overflow-y: auto;
    }

    .tags {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`;

export const Form = styled.form`
    margin: 0 124px;

    > div {
        display: flex;
        gap: 40px;
        margin-bottom: 40px;
    }

    > header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 36px;

        a {
            font-size: 20px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }

    .tags {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        border-radius: 10px;

    }
`;
import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border: none;
    border-radius: 10px;
    padding: 32px;
    margin-bottom: 16px;

    > h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > button {
        border: none;
        background: none;
        display: flex;
        gap: 5px;
        margin-top: 10px;

        > svg {
            color: ${({ theme }) => theme.COLORS.ORANGE};
        }
        .button-qualified {
            fill: ${({ theme }) => theme.COLORS.ORANGE};
        }
    }

    .button-resume > p {
        margin: 15px 0;
        color: ${({ theme }) => theme.COLORS.WHITE};
        overflow: hidden; 
        text-overflow: ellipsis; 
        display: -webkit-box;
        -webkit-line-clamp: 2; 
        -webkit-box-orient: vertical; 
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 24px;
    }
`;



import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border: none;
    border-radius: 10px;
    padding: 32px;
    margin-bottom: 16px;

    > div{
        display: flex;
        align-items: center;
        gap: 19px;
        margin-bottom: 24px;
        
        > h1 {
            font-weight: 500;
            font-size: 36px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    
        > button {
            border: none;
            background: none;
            display: flex;
            gap: 5px;
   
            > svg {
                color: ${({ theme }) => theme.COLORS.ORANGE};
            }
            .button-qualified {
                fill: ${({ theme }) => theme.COLORS.ORANGE};
            }
        }
    }

    > footer {
        width: 100%;
        display: flex;
        margin: 40px 0;
    }

    > p {
        text-align: justify;
        margin: 15px 0;
        color: ${({ theme }) => theme.COLORS.WHITE};
        overflow-y: auto;
        

        &::-webkit-scrollbar {
        width: 8px;
        }
        &::-webkit-scrollbar-thumb {
            background-color: ${({ theme }) => theme.COLORS.ORANGE};
            border-radius: 10px;
        
    }
    }

`;

export const Author = styled(Link)`
    display: flex;
    align-items: center;
    text-align: end;

    
    > div {
        display: flex;
        margin-right: 16px;
        line-height: 24px;
        align-items: center;

        > img {
            width: 20px;
            height: 20px;
            border-radius: 50%;
        }

        
        strong {
            margin-left: 10px;
            font-size: 18px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }

        > svg {
            margin-left: 20px;
            color: ${({ theme }) => theme.COLORS.ORANGE}
        }

        span {
            margin-left: 5px;
            font-size: 18px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

    }
`;
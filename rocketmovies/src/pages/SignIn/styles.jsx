import styled from "styled-components";
import backgroundImg from "../../assets/background.png"
import { Link } from "react-router-dom";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 136px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    > h1 {
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    > h2 {
        font-size: 24px;
        margin-top: 48px;
    }

    > p {
        font-size: 14px;
        margin-top: 10px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
`;

export const CreateAccount = styled(Link)`
    margin-top: 42px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
`;


export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;
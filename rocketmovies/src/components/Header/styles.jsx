import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
    grid-area: header;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 124px;
    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    text-align: end;

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-right: 16px;
        line-height: 24px;

        span {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        strong {
            font-size: 18px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`;

export const Search = styled.div`
    width: 630px;
`;

export const Brand = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: transparent;

    > h1 {
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }
`;

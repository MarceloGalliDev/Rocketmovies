import styled from "styled-components";
import { Link } from "react-router-dom"

export const Container = styled(Link)`
    grid-area: buttonback;

    display: flex;
    align-items: center;
    background: none;
    color: ${({ theme }) => theme.COLORS.ORANGE};
    border: none;
    font-size: 16px;
`;
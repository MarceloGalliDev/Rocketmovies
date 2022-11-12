import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 56px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 500;

    background-color: ${({ theme, isDelete }) => isDelete ? theme.COLORS.BACKGROUND_900 : theme.COLORS.ORANGE};
    color: ${({ theme, isDelete }) => isDelete ? theme.COLORS.ORANGE : theme.COLORS.BACKGROUND_800};

    &:disabled {
        opacity: 0.5;
    }
`;

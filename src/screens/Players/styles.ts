import styled from "styled-components/native";

export const Container10 = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    padding: 24px;
`

export const Form1 = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    margin-bottom: 16px;
`

export const HeaderList = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin : 32px 0 12px;
`

export const NumberOfPlayers = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`
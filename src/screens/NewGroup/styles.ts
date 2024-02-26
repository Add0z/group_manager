import styled from "styled-components/native";

// UserTree
import { UsersThree } from 'phosphor-react-native';

export const Container8 = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    padding: 24px;
` 


export const Content = styled.View`
    flex: 1;
    justify-content: center;
`

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
    color: theme.COLORS.GREEN_700,
    size: 32,
}))` 
align-self: center;
`
import { Touchable, TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type FilterStyledProps = {
    isActive?: boolean;
}


export const Container12= styled(TouchableOpacity)<FilterStyledProps>`
${({ theme, isActive }) => isActive && css`border: 1px solid ${theme.COLORS.GREEN_700};
`};

border-radius: 4px;
margin-right: 12px;

height: 38px;
width: 70px;

align-items: center;
justify-content: center;
`;

export const Title3 = styled.Text`
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`
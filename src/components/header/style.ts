import styled from "styled-components/native";
import { CaretLeft,  } from 'phosphor-react-native'


export const Container3 = styled.View`
width: 100%;
padding-top: 10px;
flex-direction: row;
align-items: center;
justify-content: center;
`;

export const Logo = styled.Image`	
width: 46px;
height: 55px;
justify-content: center;
align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
    flex: 1;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
    size: 36,
    color: theme.COLORS.WHITE
}))``;
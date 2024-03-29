import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../theme';
import { UsersThree } from 'phosphor-react-native';

export const Container4 = styled(TouchableOpacity)`
    width: 100%;
    height: 92px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
    border-radius: 6px;
    padding: 24px;
    margin-bottom: 16px;
    flex-direction: row;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
    color: theme.COLORS.GREEN_700,
    size: 32,
    weight: 'fill'
}))`
    margin-right: 20px;
`;
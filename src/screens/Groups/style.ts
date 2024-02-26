import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
  padding-top: 40px;
  /* justify-content: center;
  align-items: center; */
`;

export const Title = styled.Text`
  color: #FFF;
  font-size: 32px;
  text-align: center;
`;
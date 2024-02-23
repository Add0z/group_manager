import { Header } from '@components/loading/header';
import { Container, Title } from './style';
import { Button } from 'react-native'

export function Groups() {
  return (
    <Container>
      <Header />
      <Title>Groups</Title>
      <Button 
              onPress={ButtonPressed}
              title="Learn More"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
                />
    </Container>
  );
}

function ButtonPressed() {
  // debugger
  console.log("Button Pressed");
}
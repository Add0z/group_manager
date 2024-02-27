import { Header } from '@components/header';
// import { useNavigation } from 'react-navigation/native';
import { Container, Title } from './style';
import { Button } from 'react-native'
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty';
import { ButtonStyled } from '@components/Button';
import { NewGroup } from '@screens/NewGroup';
import { useNavigation } from '@react-navigation/native';

export function Groups() {

  const [groups, setGroups] = useState([
    "Galera do Rocket",
    "Jogadores do Rocket",
    "Jogadores do Rocket 2"],

    )

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new');
  }

  return (
    <Container>
      <Header />
      <Highlight title = "Turmas"
        subtitle = "Jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => 
        <GroupCard title = {item}
          onPress={ButtonPressed}
        />}
        ListEmptyComponent={() => <ListEmpty message="Nao há turmas ainda" />}
      />
      <ButtonStyled title='Criar nova turma' onPress={handleNewGroup}  />
    </Container>
  );
}



// function handleNewGroup() {
//   console.log("Nova turma");
//   navigation.navigate('Newgroup');

// }

function ButtonPressed() {
  // debugger
  console.log("Button Pressed");
}
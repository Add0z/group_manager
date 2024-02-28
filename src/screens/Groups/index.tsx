import { Header } from '@components/header';
// import { useNavigation } from 'react-navigation/native';
import { Container, Title } from './style';
import { Button } from 'react-native'
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty';
import { ButtonStyled } from '@components/Button';
import { NewGroup } from '@screens/NewGroup';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { groupsGetAll } from '@storage/group/groupGetAll';
import { Loading } from '@components/loading';

export function Groups() {
  const [isLoading, setIsLoading] = useState(true);


  const [groups, setGroups] = useState([
    "Galera do Rocket",
    "Jogadores do Rocket",
    "Jogadores do Rocket 2"],
  );

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new');
  }
  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group })
  }

  async function fetchGroups() {
    try {
      setIsLoading(true);
      const data = await groupsGetAll();
      setGroups(data);
    }
    catch (error) {
      console.log(error);
    }finally{
      setIsLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, []))

  return (
    <Container>
      <Header />
      <Highlight title = "Turmas"
        subtitle = "Jogue com a sua turma" />
    {isLoading ? <Loading /> :
      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => 
        <GroupCard title = {item}
          onPress={() => handleOpenGroup(item)}
        />}
        ListEmptyComponent={() => <ListEmpty message="Nao há turmas ainda" />}
      />
    }
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
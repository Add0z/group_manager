import { Header } from "@components/header";
import { Container10, Form1,HeaderList,NumberOfPlayers } from "./styles";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { FlatList, TextInput } from "react-native";
import { useCallback, useEffect, useRef, useState } from "react";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from '@components/ListEmpty';
import { ButtonStyled } from "@components/Button";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { Alert } from "react-native";
import { AppError } from "@utils/appError";
import { playerAddByGroup } from "@storage/players/playerAddByGroup";
import { playerGetByGroup } from "@storage/players/playerGetByGroup";
import { playerByGroupAndTeam } from "@storage/players/playerByGroup&Team";
import { PlayerStorageDTO } from "@storage/players/PlayerStorageDTO";
import { playerRemoveByGroup } from "@storage/players/playerRemoveByGroup";
import { groupRemoveByName } from "@storage/group/groupRemoveByName";
import { Loading } from "@components/loading";

type RouteType = {
    group: string;
}


export function Players() {
    const [isLoading, setIsLoading] = useState(true);
    const [team, setTeam] = useState('Time A');
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
    const route = useRoute();
    const { group } = route.params as RouteType;
    const [newPlayerName, setNewPlayerName] = useState('')

    async function handleAddPlayer(){
        if(newPlayerName.trim().length === 0){
            return Alert.alert('Novo Jogador', 'informe o nome do jogador!');
        }

        const newPlayer = {
            name: newPlayerName,
            team
        }
        try{
            await playerAddByGroup(newPlayer, group);

            newPlayerNameInputRef.current?.blur();


            setNewPlayerName('');         
            fetchPlayersByTeam();   

        }
        catch(error){
            if(error instanceof AppError){
                throw Alert.alert('Novo Jogador', error.message); 
            }
            else{
                throw Alert.alert('Novo Jogador', 'Não foi possivel adicionar o jogador');
            }
        }
    }

    async function fetchPlayersByTeam(){
        try{
            setIsLoading(true);
            const playersByTeam = await playerByGroupAndTeam(group, team);
            setPlayers(playersByTeam);
        }
        catch(error){
            console.log(error);
            Alert.alert('Oops', 'Não foi possivel carregar os jogadores');
        }finally{
            setIsLoading(false);
        }
    }

    const newPlayerNameInputRef = useRef<TextInput>(null);

    async function handleRemovePlayer(playerName: string){
        try{
            await playerRemoveByGroup(playerName, group);
            fetchPlayersByTeam();
        }
        catch(error){
            Alert.alert('Erro ao remover o jogador', 'Tente novamente');
        }
    }

    const navigation = useNavigation()

    async function groupRemove(){
        try{
            await groupRemoveByName(group);
            navigation.navigate('groups'); 
        }
        catch(error){
            Alert.alert('Erro ao remover o grupo', 'Tente novamente');
        }
    }

        async function handleRemoveGroup(){
        Alert.alert('Remover turma', 'Deseja remover a turma?', [
            {text: 'Não', style: 'cancel'},
            {text: 'Sim', onPress: () => groupRemove()}
        ])
    }

    useEffect(() => {
        fetchPlayersByTeam()
    }, [team])

    

    return(
        <Container10 >
            <Header showBackButton  />
            <Highlight title={group} subtitle="Jogue com a sua turma" />
            <Form1>
                <Input placeholder="Nome da pessoa" 
                autoCorrect={false} 
                autoCapitalize = "sentences"
                onChangeText={setNewPlayerName}
                value={newPlayerName}
                inputRef={newPlayerNameInputRef}
                onSubmitEditing={handleAddPlayer}
                returnKeyType="done"
                />
                
                <ButtonIcon icon="add" onPress={handleAddPlayer} />
            </Form1>
            <HeaderList>
                <FlatList data={['Time A', 'Time B', 'Time C']} 
                keyExtractor={item => item} 
                renderItem={({ item }) => <Filter title={item} isActive = {item === team} onPress={() => setTeam(item)} />}
                horizontal={true}  />
                <NumberOfPlayers>{players.length}</NumberOfPlayers>
            </HeaderList>
            {isLoading ? <Loading /> :
            
                <FlatList 
                data={players}
                keyExtractor={item => item.name}
                renderItem={({ item }) => <PlayerCard name={item.name} onRemove={() => handleRemovePlayer( item.name)} />}     
                ListEmptyComponent={() => <ListEmpty message="Nao há jogadores ainda" />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[
                    { paddingBottom: 100 },
                    players.length === 0 && { flex: 1 }
                ]}
                />
            }
            <ButtonStyled title="Remover turma" type="SECONDARY"  onPress={handleRemoveGroup} />
        </Container10>
);
}
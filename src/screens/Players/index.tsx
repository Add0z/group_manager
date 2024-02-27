import { Header } from "@components/header";
import { Container10, Form1,HeaderList,NumberOfPlayers } from "./styles";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { FlatList } from "react-native";
import { useState } from "react";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from '@components/ListEmpty';
import { ButtonStyled } from "@components/Button";




export function Players() {
    const [team, setTeam] = useState('Time A');
    const [players, setPlayers] = useState(['André'])


    return(
        <Container10 >
            <Header showBackButton  />
            <Highlight title="Nome da Turma" subtitle="Jogue com a sua turma" />
            <Form1>
                <Input placeholder="Nome da pessoa" autoCorrect={false}/>
                <ButtonIcon icon="add" />
            </Form1>
            <HeaderList>
                <FlatList data={['Time A', 'Time B', 'Time C']} 
                keyExtractor={item => item} 
                renderItem={({ item }) => <Filter title={item} isActive = {item === team} onPress={() => setTeam(item)} />}
                horizontal={true}  />
                <NumberOfPlayers>{players.length}</NumberOfPlayers>
            </HeaderList>
            <FlatList 
            data={players}
            keyExtractor={item => item}
            renderItem={({ item }) => <PlayerCard name={item} onRemove={() => {}} />}     
            ListEmptyComponent={() => <ListEmpty message="Nao há jogadores ainda" />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
                { paddingBottom: 100 },
                players.length === 0 && { flex: 1 }
            ]}/>
            <ButtonStyled title="Remover turma" type="SECONDARY" />
        </Container10>
);
}
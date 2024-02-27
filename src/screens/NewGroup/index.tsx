import { Header } from "@components/header";
import { Container8,Content,Icon } from "./styles";
import { ButtonStyled } from "@components/Button";
import { Groups } from "@screens/Groups";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";


export function NewGroup() {

    const[group, setGroup] = useState('')
    const route = useRoute();
    

    function handleNewGroup(){
        useNavigation().navigate('players', {group});
    }

    return (
        <Container8>
            <Header showBackButton />

        <Content>
        <Icon />
        
        <Highlight 
            title="Nova turma"
            subtitle="crie a turma para adicionar as pessoas"
        />
        <Input placeholder="Nome da turma" autoCorrect={false} onChangeText={setGroup}/>
        <ButtonStyled 
            title="Criar" onPress={handleNewGroup}
        />
        </Content>
        </Container8>
    )

}
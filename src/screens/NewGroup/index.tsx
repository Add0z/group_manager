import { Header } from "@components/header";
import { Container8,Content,Icon } from "./styles";
import { ButtonStyled } from "@components/Button";
import { Groups } from "@screens/Groups";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/appError";
import { Alert } from "react-native";


export function NewGroup() {

    const[group, setGroup] = useState('')
    const route = useRoute();
    
    const navigation = useNavigation();


    async function handleNewGroup(){
        try{
            if(group.trim().length === 0){
                return Alert.alert('Novo Turma','Informe o nome da turma');
            }


            await groupCreate(group);
            navigation.navigate('players', {group});
            
        }
        catch(error){
            if(error instanceof AppError){
                Alert.alert('Novo Turma',error.message);
            }
            else{
                Alert.alert('Novo Turma','Não foi possivel criar a turma');
            }
        }
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
import { Header } from "@components/header";
import { Container8,Content,Icon } from "./styles";
import { ButtonStyled } from "@components/Button";
import { Groups } from "@screens/Groups";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";


export function NewGroup() {
    return (
        <Container8>
            <Header showBackButton />

        <Content>
        <Icon />
        
        <Highlight 
            title="Nova turma"
            subtitle="crie a turma para adicionar as pessoas"
        />
        <Input placeholder="Nome da turma"/>
        <ButtonStyled 
            title="Criar"
        />
        </Content>
        </Container8>
    )
}
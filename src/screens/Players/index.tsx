import { Header } from "@components/header";
import { Container10 } from "./styles";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { ButtonIcon } from "@components/ButtonIcon";



export function Players() {
    return(
        <Container10 >
            <Header showBackButton  />
            <Highlight title="Jogadores" subtitle="Jogue com a sua turma" />
            <Input />
            <ButtonIcon icon="add" />
        </Container10>

);
}
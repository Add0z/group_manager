import { Container6, Message } from "./styled";


type Props = {
    message: string
}


export function ListEmpty({ message }: Props) {
    return (
        <Container6>
            <Message>{message}</Message>
        </Container6>
    )
}
import { Container4, Title, Icon } from "./styles";
import { TouchableOpacityProps} from "react-native";

type GroupCardProps = TouchableOpacityProps & {
    title: string
}


export function GroupCard( { title, ...rest }: GroupCardProps) {
    return (
        <Container4 {...rest}>
            <Icon />
            <Title>
                {title}
            </Title>
        </Container4>
    );
}
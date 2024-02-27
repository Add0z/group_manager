import { TouchableOpacityProps } from "react-native";
import { Container12, FilterStyledProps, Title3 } from "./styles";


type Props = TouchableOpacityProps &  FilterStyledProps & {
    title: string
}


export function Filter({ title, isActive = false, ...rest }: Props) {
    return (
        <Container12 isActive={isActive} {...rest}>
            <Title3>{title}</Title3>
        </Container12>
    )
}
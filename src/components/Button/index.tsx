import { TouchableOpacityProps } from "react-native";
import { Container7, Title } from "./styles";
import { ButtonTypeStyleProps } from "./styles";

type props = TouchableOpacityProps & {
    title: string;
    type?: ButtonTypeStyleProps;
};

export function ButtonStyled({ title, type = "PRIMARY", ...rest }: props) {
    return (
        <Container7 type={type} {...rest}>
            <Title>{title}</Title>
        </Container7>
    );
}
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import { Container9 } from "./styles";

export function Input({ ...rest }: TextInputProps) {
    const {COLORS} = useTheme();

    return (
        <Container9
            placeholderTextColor={COLORS.GRAY_300}
            {...rest}
        />
    );
}
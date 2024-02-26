import { TouchableOpacityProps } from "react-native";
import { Container11, PlusIcon,ButtonTypeStyleProps } from './styles'
import { MaterialIcons} from "@expo/vector-icons";



type Props = TouchableOpacityProps & {
    type?: ButtonTypeStyleProps
    icon: keyof typeof MaterialIcons.glyphMap
}

export function ButtonIcon({icon,type = "PRIMARY", ...rest }: Props) {
    return (
        <Container11 {...rest} >
            <PlusIcon name = {icon} type={type}/>

        </Container11>
    )
}

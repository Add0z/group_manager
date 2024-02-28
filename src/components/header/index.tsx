import { useNavigation } from "@react-navigation/native";
import { Container3,Logo } from "./style";
import { BackIcon,BackButton  } from "./style";

import logoImg from '@assets/logo.png';

type props = {
    showBackButton?: boolean
}



export function Header({showBackButton = false}: props) {

    const navigation = useNavigation()

    function handleGoBack() {
        navigation.navigate('groups');
    }

    return (
        <Container3>{ 
            showBackButton &&
            <BackButton onPress={handleGoBack} >
                <BackIcon />
            </BackButton>
    }

    <Logo source={logoImg} />
        </Container3>
    );
}
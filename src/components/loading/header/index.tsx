import { Container3,Logo } from "./style";

import logoImg from '@assets/logo.png';

export function Header() {
    return (
        <Container3>
            <Logo source={logoImg} />
        </Container3>
    );
}
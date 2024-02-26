import { Container5, Title, Subtitle } from "./styled";

type HighlightProps = {
    title: string;
    subtitle: string;
}


export function Highlight({ title, subtitle }: HighlightProps) {
    return (
        <Container5>
            <Title>
                {title}
            </Title>
            <Subtitle>
                {subtitle}
            </Subtitle>
        </Container5>
    );
}
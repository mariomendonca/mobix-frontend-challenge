import { Text } from "@ui-kitten/components";
import { Container } from "./styles";


interface CardProps {
  name: string
}

export function Card({ name }: CardProps) {
  return (
    <Container>
      <Text>
        {name}
      </Text>
    </Container>
  )
}
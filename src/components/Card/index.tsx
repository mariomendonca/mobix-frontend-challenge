import { Text } from "@ui-kitten/components";
import { TouchableOpacityProps } from "react-native";
import { Container } from "./styles";


interface CardProps extends TouchableOpacityProps {
  name: string
}

export function Card({ name, ...rest }: CardProps) {
  return (
    <Container {...rest}>
      <Text>
        {name}
      </Text>
    </Container>
  )
}
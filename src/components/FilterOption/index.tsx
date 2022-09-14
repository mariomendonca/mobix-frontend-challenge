import { Text } from "@ui-kitten/components";
import { TouchableOpacityProps } from "react-native";
import { Container } from "./styles";

interface FilterOptionProps extends TouchableOpacityProps {
  title: string
  isSelected: boolean
}

export function FilterOption({ title, isSelected, ...rest }: FilterOptionProps) {
  return (
    <Container isSelected={isSelected} {...rest}>
      <Text
        category="p1"
        appearance={isSelected ? "alternative" : "default"}
      >
        {title}
      </Text>
    </Container>
  )
}

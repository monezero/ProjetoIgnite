import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";
type Props = TouchableOpacityProps & {
  title: string;
};
export function GroupCard({ title, onPress, ...rest }: Props) {
  return (
    <Container onPress={onPress} {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
}

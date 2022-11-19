import { SafeAreaView } from "react-native-safe-area-context";
import styled,{css} from "styled-components/native";

export const Container = styled(SafeAreaView)`
${({theme }) => css `
flex: 1;
background-color: ${theme.COLORS.GRAY_700};
padding: 24px;
`};

`


export const Title = styled.Text`
color: #fff;
font-size: 32px;
`;
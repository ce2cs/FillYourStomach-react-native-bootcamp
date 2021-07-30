import styled from "styled-components/native/dist/styled-components.native.esm";
import {Button} from "react-native-paper";
import {colors} from "../theme/colors";
import {space} from "../theme/spacing";

const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
  mode: "outlined"
})`
  padding: ${space[2]};
  background-color: white;
  width: 300px;
`;

export default AuthButton;
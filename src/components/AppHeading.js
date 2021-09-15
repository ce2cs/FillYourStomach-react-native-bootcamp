import styled from "styled-components/native/dist/styled-components.native.esm";
import {Title} from "react-native-paper";
import {theme} from "../theme";

const AppHeading = styled(Title)`
  color: white;
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.h4};
  line-height: 60px;
  text-align: center;
`

export default AppHeading;
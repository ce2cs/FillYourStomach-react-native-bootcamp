import styled from "styled-components/native/dist/styled-components.native.esm";
import {SafeAreaView, StatusBar} from "react-native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight ? StatusBar.currentHeight : 0}px;
`;

export default SafeArea;
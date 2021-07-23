import {ActivityIndicator, Colors} from "react-native-paper";
import React from "react";
import styled from "styled-components/native/dist/styled-components.native.esm";

const LoadingIndicator = styled(ActivityIndicator)`
  margin: auto;
`
const Loading = () => <LoadingIndicator animating={true} size='large' color={Colors.red800}/>

export default Loading;

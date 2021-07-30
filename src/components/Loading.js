import {ActivityIndicator, Colors} from "react-native-paper";
import React from "react";
import styled from "styled-components/native/dist/styled-components.native.esm";

const LoadingIndicator = styled(ActivityIndicator)`
  margin: auto;
`
const Loading = ({color=Colors.red800}) => <LoadingIndicator animating={true} size='large' color={color}/>

export default Loading;

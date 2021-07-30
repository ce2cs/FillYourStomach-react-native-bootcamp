import React from "react";
import styled, {useTheme} from "styled-components/native";

const sizeVariant = {
  minimum: 1,
  small: 2,
  medium: 3,
  large: 4,
  huge: 5,
  gigantic: 6,
  maximum: 7
};

const SpacerView = styled.View`
  height: ${(props) => {return props.height}};
  width: auto;
`;

const Spacer = ({size}) => {
  const theme = useTheme();
  const sizeIdx = sizeVariant[size];
  const height = theme.space[sizeIdx];
  return (<SpacerView height={height}/>);
};

export default Spacer;
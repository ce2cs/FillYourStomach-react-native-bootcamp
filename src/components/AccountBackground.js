import styled from "styled-components/native";

const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../assets/food-image.jpeg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default AccountBackground;

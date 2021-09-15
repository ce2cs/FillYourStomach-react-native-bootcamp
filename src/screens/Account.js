import React from "react";
import styled from "styled-components/native";
import {Button, Colors, Title} from "react-native-paper";
import LottieView from 'lottie-react-native';

import AccountBackground from "../components/AccountBackground";

import {colors} from "../theme/colors";
import AuthButton from "../components/AuthButton";
import Spacer from "../components/Spacer";
import AppHeading from "../components/AppHeading";
import {useTheme} from "styled-components";


// export const AccountCover = styled.View`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(255, 255, 255, 0.3);
// `;

// export const AccountContainer = styled.View`
//   background-color: rgba(255, 255, 255, 0.7);
//   padding: ${(props) => props.theme.space[4]};
//   margin-top: ${(props) => props.theme.space[2]};
// `;

const ButtonContainer = styled.View`
  height: 40%;
`

const AnimationContainer = styled.View`
  height: 30%;
  width: 50%;
`

const Account = ({navigation}) => {
  return (
    <AccountBackground>
      <AnimationContainer>
        <LottieView
          key="animation"
          autoPlay
          loop={false}
          resizeMode="cover"
          source={require("../../assets/food-animation.json")}
        />
      </AnimationContainer>
      <Spacer size='large'/>
      <AppHeading>Fill Your Stomach</AppHeading>
      <Spacer size='large'/>
      <ButtonContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size='huge'/>
        <AuthButton
          icon="email"
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AuthButton>
      </ButtonContainer>
    </AccountBackground>
  );
};

export default Account;
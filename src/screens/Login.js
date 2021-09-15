import React, {useContext, useState} from "react";

import AccountBackground from "../components/AccountBackground";
import {AuthenticationContext} from "../services/authentication/context";
import {Colors, TextInput} from "react-native-paper";
import AuthButton from "../components/AuthButton";
import styled from "styled-components/native/dist/styled-components.native.esm";
import Text from "../components/CustomText";
import AccountTextInput from "../components/AccountTextInput";
import Loading from "../components/Loading";
import Spacer from "../components/Spacer";
import {View} from "native-base";
import {KeyboardAvoidingView} from "react-native";
import AppHeading from "../components/AppHeading";

const InputContainer = styled.View`
  margin: auto;
  align-content: center;
`;

export const Login = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {onLogin, error, isLoading} = useContext(AuthenticationContext);
  return (
    <AccountBackground>
      <InputContainer>
        {
          isLoading
            ? <Loading color={Colors.white}/>
            :
            <>
              <AppHeading>Login</AppHeading>
              <Spacer size='huge'/>
              <AccountTextInput
                label="E-mail"
                value={email}
                textContentType="emailAddress"
                keyboardType="email-address"
                autoCapitalize="none"
                mode='flat'
                onChangeText={(u) => setEmail(u)}
              />
              <Spacer size='huge'/>
              <AccountTextInput
                label="Password"
                value={password}
                textContentType="password"
                secureTextEntry
                autoCapitalize="none"
                mode='flat'
                secure
                onChangeText={(p) => setPassword(p)}
              />
              <Spacer size='huge'/>
              {error && (
                <Text variant="error" style={{color: 'white', width: 300}}>{error.message}</Text>
              )}
              <Spacer size='small'/>
              <AuthButton
                icon="lock-open-outline"
                mode="contained"
                onPress={() => onLogin(email, password)}
              >
                Login
              </AuthButton>
              <Spacer size='large'/>
              <AuthButton
                icon="email"
                mode="contained"
                onPress={() => navigation.navigate("Register")}
              >
                I do not have an account
              </AuthButton>
            </>
        }
      </InputContainer>
    </AccountBackground>
  );
};

export default Login;
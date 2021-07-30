import React, {useContext} from "react";
import AppNavigator from "./AppNavigator";
import {AuthenticationContext} from "../services/authentication/context";
import {AccountNavigator} from "./AccountNavigator";

const Navigator = () => {
  const {user} = useContext(AuthenticationContext);
  return !!user
    ? <AppNavigator/>
    : <AccountNavigator/>;
};

export default Navigator;
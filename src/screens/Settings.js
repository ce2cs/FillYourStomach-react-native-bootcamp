import React, { useContext } from "react";
import styled from "styled-components/native";

import { List, Avatar } from "react-native-paper";
import SafeArea from "../components/SafeArea";
import Spacer from "../components/Spacer";
import Text from "../components/CustomText";
import {AuthenticationContext} from "../services/authentication/context";
import {isShowFavoritesOnlyContext} from "../context/isFavoritesOnly";


const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
  align-items: center;
`;

const Settings = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const {isShowFavoritesOnly, setShowFavoritesOnly} = useContext(isShowFavoritesOnlyContext);
  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
        <Spacer size="large"/>
        <Text variant="label">{user.email}</Text>
      </AvatarContainer>

      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => {
            if (!isShowFavoritesOnly){
              setShowFavoritesOnly(true);
            }
            navigation.navigate("Restaurants")}
          }
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};

export default Settings;
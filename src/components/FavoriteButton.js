import React, {useContext} from "react";
import styled from "styled-components/native";
import {AntDesign} from "@expo/vector-icons";
import {TouchableOpacity} from "react-native";

import {FavoritesContext} from "../services/Favorites/context";

const FavoriteContainer = styled(TouchableOpacity)` position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const FavoriteButton = ({restaurant}) => {
  const {favorites, addToFavorites, removeFromFavorites} = useContext(
    FavoritesContext
  );

  const isFavorite = favorites.find((r) => r.placeId === restaurant.placeId);

  return (
    <FavoriteContainer onPress={() => {
      isFavorite
        ? removeFromFavorites(restaurant)
        : addToFavorites(restaurant)
    }}>

      <AntDesign name={isFavorite ? "heart" : "hearto"}
                 size={24}
                 color={isFavorite ? "red" : "white"}/>
    </FavoriteContainer>
  );
};

export default FavoriteButton;
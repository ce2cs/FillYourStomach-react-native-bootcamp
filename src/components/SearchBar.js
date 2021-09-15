import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components/native";
import {Searchbar, Menu} from "react-native-paper";
import {LocationContext} from "../services/Location/context";
import {Platform, Pressable, StatusBar, Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {width} from "styled-system";
import {RestaurantsContext} from "../services/restaurant/context";
import {isShowFavoritesOnlyContext} from "../context/isFavoritesOnly";
import {isRestaurantSortedContext} from "../context/isRestaurantSorted";

const SearchContainer = styled.View`
  flex: 1;
  position: absolute;
  padding: ${(props) => props.theme.space[3]};
  top: ${Platform.OS === 'ios' ? 30 : 0}px;
  width: 100%;
  z-index: 1;
`
export const LocationSearchBar = () => {
  const {keyword, search} = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  const [isSearchListShow, setSearchListShow] = useState(false);
  const {isShowFavoritesOnly, setShowFavoritesOnly} = useContext(isShowFavoritesOnlyContext);
  const {isRestaurantSorted, setRestaurantSorted} = useContext(isRestaurantSortedContext);

  const onPress = () => {
    setSearchListShow(!isSearchListShow);
  }

  const Ellipsis = <Ionicons name={'ellipsis-vertical'} size={25} color={'grey'}/>

  useEffect(() => setSearchKeyword(keyword), [keyword]);
  return (
    <SearchContainer>
      <Searchbar
        icon={() => (Ellipsis)}
        onIconPress={onPress}
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />

      {
        isSearchListShow
          ? <View style={{width: 250, backgroundColor: 'white', flex: 1, borderRadius: 5}}>
            <Menu.Item icon="sort" onPress={() => {
              setRestaurantSorted(!isRestaurantSorted);
            }} title="Sort By Rating" style={{width: 250}}/>
            <Menu.Item icon="heart" onPress={() => {
              setShowFavoritesOnly(!isShowFavoritesOnly);
              setSearchListShow(false);
            }} title="Show Favorites Only" style={{width: 250}}/>
          </View>
          : null
      }
    </SearchContainer>
  );
};

export default LocationSearchBar;

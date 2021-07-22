import React, {useContext} from "react";
import {ActivityIndicator, Colors, Searchbar} from "react-native-paper";
import {StatusBar, StyleSheet, SafeAreaView, Text, View, FlatList} from "react-native";
import styled from "styled-components/native";

import RestaurantInfoCard from "../components/RestaurantCard";
import {RestaurantsContext} from "../services/restaurant/context";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight ? StatusBar.currentHeight : 0}px;
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

const LoadingIndicator = styled(ActivityIndicator)`
  margin: auto;
`

export const Restaurants = () => {
  const {restaurants, isLoading, error} = useContext(RestaurantsContext)
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar/>
      </SearchContainer>
      {isLoading ?
        <LoadingIndicator animating={true} size='large' color={Colors.red800}/>
        : <FlatList
          data={restaurants}
          renderItem={({item}) => {
            return <RestaurantInfoCard restaurant={item}/>
          }}
          keyExtractor={(item, index) => {
            return index.toString()
          }}
          contentContainerStyle={{padding: 16}}
        />
      }
    </SafeArea>
  );
}

export default Restaurants;
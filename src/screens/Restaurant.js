import React, {useContext} from "react";
import {ActivityIndicator, Colors, Searchbar} from "react-native-paper";
import {StatusBar, StyleSheet, SafeAreaView, Text, View, FlatList, TouchableOpacity} from "react-native";
import styled from "styled-components/native";

import RestaurantInfoCard from "../components/RestaurantCard";
import {RestaurantsContext} from "../services/restaurant/context";
import Loading from "../components/Loading";
import LocationSearchBar from "../components/SearchBar";
import RestaurantDetail from "./RestaurantDetail";
import SafeArea from "../components/SafeArea";


const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;


const Restaurants = ({navigation}) => {
  const {restaurants, isLoading, error} = useContext(RestaurantsContext)

  return (
    <SafeArea>
      <LocationSearchBar/>
      {isLoading ?
        <Loading/>
        : <FlatList
          data={restaurants}
          renderItem={({item}) => {
            return (<TouchableOpacity onPress={() => navigation.navigate('RestaurantDetail', {restaurant: item})}>
              <RestaurantInfoCard restaurant={item}/>
            </TouchableOpacity>);
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
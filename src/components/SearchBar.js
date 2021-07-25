import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components/native";
import {Searchbar} from "react-native-paper";
import {LocationContext} from "../services/Location/context";
import {Platform, StatusBar} from "react-native";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  top: ${Platform.OS === 'ios' ? 30: 0}px;
  width: 100%;
  z-index: 999;
`;

export const LocationSearchBar = () => {
  const {keyword, search} = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  useEffect(() => setSearchKeyword(keyword),
    [keyword]);
  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          console.log('submit');
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};

export default LocationSearchBar;

import React, {useRef, useState, useEffect, useContext} from "react";
import { Camera as ExpoCamera } from "expo-camera";
import styled from "styled-components/native";
import {AsyncStorage, TouchableOpacity, View} from "react-native";
import Text from "../components/CustomText";
import {AuthenticationContext} from "../services/authentication/context";

const ProfileCamera = styled(ExpoCamera)`
  width: 100%;
  height: 100%;
`;

const Camera = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();
  const { user } = useContext(AuthenticationContext);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };
  useEffect(() => {
    (async () => {
      const { status } = await ExpoCamera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <TouchableOpacity onPress={snap}>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={ExpoCamera.Constants.Type.front}
      />
    </TouchableOpacity>
  );
};

export default Camera;
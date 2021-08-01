import {Dialog, Paragraph, Portal, Button} from "react-native-paper";
import {View} from "react-native";
import React from "react";

const ErrorAlert = ({message, reload}) => (
  <View style={{width: 500, height: 500}}>
    <Portal>
      <Dialog visible={true} style={{backgroundColor: 'white'}}>
        <Dialog.Title>Alert</Dialog.Title>
        <Dialog.Content>
          <Paragraph>{message}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => reload()}>Reload</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  </View>
)

export default ErrorAlert;
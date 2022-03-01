import React from "react";
import { View, TextInput, Text, StyleSheet } from 'react-native'

const textFieldStyle = StyleSheet.create({
  marginTop: 20, borderRadius: 5, height: 50, fontSize: 15, borderWidth: 0.5, paddingLeft: 10
})

const AppTextField = (props) => (
  <View>
    <TextInput style={textFieldStyle} placeholder={props.placeholder} onChangeText={props.onChangeText} secureTextEntry={props.secureTextEntry} />
    {props.error && <Text style={{ paddingTop: 5, color: 'red' }}>{props.error}</Text>}
  </View>
);
export default AppTextField

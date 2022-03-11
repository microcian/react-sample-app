import React from "react";
import { TextInput, StyleSheet, Text, View } from "react-native";
import { colors } from 'theme'

const styles = StyleSheet.create({
    input: {
        height: 50, width: '100%', fontSize: 15,
        borderRadius: 5, borderWidth: 0.5, borderColor: colors.colorDimBlack,
        paddingHorizontal: 10
    }
})

const CustomAppTextField = (props) => (
    <View>
        <TextInput style={{ ...styles.input, ...props.style }}
            placeholder={props.placeholder} onChangeText={props.onChangeText} secureTextEntry={props.secureTextEntry} />
        {props.error && <Text style={{ paddingTop: 5, color: 'red' }}>{props.error}</Text>}
    </View>
    // return <AppTextField style={{ ...styles.input, ...props.style }} />
);

export default CustomAppTextField
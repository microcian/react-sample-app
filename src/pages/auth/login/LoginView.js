import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, TextInput, Alert } from "react-native"
import AppTextField from '../../../utils/AppTextField'
import validateWrapper from '../../../utils/ValidateWrapper'
import Button from 'components/Button'
import { colors, images, strings } from 'theme'

const styles = StyleSheet.create({
  root: {
    marginTop: 70, margin: 20, flex: 1, padding: 10
  },
  title: {
    fontSize: 24, marginBottom: 20,
  },
  imageBackground: {
    flex: 1, resizeMode: 'cover'
  },
  appLogo: {
    alignSelf: 'center', marginTop: 90, width: 195, height: 80
  },
  loginButton: {
    marginTop: 120, marginStart: 30, marginEnd: 30, marginBottom: 10
  },
  textFieldStyle: {
    marginTop: 20, borderRadius: 5, height: 50, fontSize: 15, borderWidth: 0.5, paddingLeft: 10
  },
  forgotPassword: {
    marginTop: 10, height: 40, paddingRight: 0, alignSelf: 'flex-end'
  },
  loginButton: {
    marginTop: 30
  },
  registerButton: {
    height: 40, alignSelf: 'center', marginStart: 10
  },
  forgotPasswordButton: {
    height: 40, alignSelf: 'flex-end'
  },
  haveNotAccount: {
    flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
  }
})

// const loginView = ({ navigation }) => (
//   <View style={styles.root}>
//     <ImageBackground style={styles.imageBackground} source={images.app_background}>

//       <Image style={styles.appLogo}
//         source={images.app_logo} />
//       <Button
//         title="LOGIN"
//         color={colors.colorWhite}
//         style={styles.loginButton}
//         backgroundColor={colors.colorDimBlack}
//       // onPress={() => {
//       //   navigation.navigate('Details', { from: 'Home' })
//       // }}
//       />
//       <Button
//         title="REGISTER"
//         color={colors.colorBlack}
//         style={styles.normalButton}
//         backgroundColor={colors.transparent}
//         borderColor={colors.colorBlack}
//         borderWidth={0.5}
//       />
//     </ImageBackground>
//   </View>
// )

const loginView = ({ navigation }) => {
  const [email, setEmailState] = useState('');
  const [password, setPassState] = useState('');

  const emailError = validateWrapper('email', email)
  const passError = validateWrapper('password', password)

  const validateInput = (emailError == null && passError == null) ? true : false

  console.log(emailError);
  console.log(passError);
  console.log(validateInput);

  return (
    <View style={styles.root}>
      <Text style={{ fontSize: 35, fontWeight: 'bold' }}>Login</Text >
      <AppTextField style={styles.textFieldStyle} placeholder='Email' onChangeText={
        value => {
          setEmailState(value)
          console.log(value);
        }
      } error={emailError}
      />
      <AppTextField style={styles.textFieldStyle} placeholder='Password' onChangeText={
        value => {
          setPassState(value)
          console.log(value);
        }
      } error={passError}
        secureTextEntry={true}
      />
      <Button
        title={strings.strForgotPassword}
        color={colors.colorBlack}
        style={styles.forgotPasswordButton}
        backgroundColor={colors.transparent}
      />

      <Button
        title={strings.strLogin}
        color={colors.colorWhite}
        style={styles.loginButton}
        backgroundColor={colors.colorDimBlack}
        disabled={
          !validateInput
        }
        onPress={() => alert("Clicked")}
        activeOpacity={validateInput ? 1 : 0.7}
      />

      <View style={styles.haveNotAccount}>
        <Text >Don't have an account?</Text>
        <Button
          title={strings.strSignUp}
          color={colors.colorBlack}
          style={styles.registerButton}
          backgroundColor={colors.transparent}
        />
      </View>
    </View>
  )
}



loginView.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

loginView.defaultProps = {
  navigation: { navigate: () => null },
}

export default loginView

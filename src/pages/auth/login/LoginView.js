import React, { useState } from 'react'
import { applyMiddleware } from 'redux'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View,
  Image, ImageBackground, TouchableOpacity, TextInput, Alert
} from "react-native"
import CustomAppTextField from '../../../components/input/CustomInput'
import validateWrapper from '../../../utils/ValidateWrapper'
import Button from 'components/Button'
import { colors, images, strings } from 'theme'
import ReduxThunk from 'redux-thunk'
import { async } from 'validate.js'


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
    marginTop: 20
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

const loginView = ({ navigation }) => {
  const [email, setEmailState] = useState('');
  const [password, setPassState] = useState('');

  const emailError = validateWrapper('email', email)
  const passError = validateWrapper('password', password)

  const validateInput = (emailError == null && passError == null) ? true : false

  const emailInputHandler = (enteredValue) => {
    setEmailState(enteredValue)
    console.log(enteredValue);
  }

  // const loginAPI = () => {
  //   async dispatch => {
  //     const response = await fetch('https://phonepayinc.com/api/mobile/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         email,
  //         phone,
  //         password
  //       })
  //     })
  //     const responseData = await response.json()
  //     console.log(responseData)
  //   }

  // }

  const loginApiAsync = async () => {
    try {
      const response = await fetch('https://phonepayinc.com/api/mobile/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          phone: null,
          password: password
        })
      });
      const json = await response.json();
      console.log(json)
    } catch (error) {
      console.error(error);
    }
  };

  console.log(emailError);
  console.log(passError);
  console.log(validateInput);

  return (
    <View style={styles.root}>
      <Text style={{ fontSize: 35, fontWeight: 'bold' }}>Login</Text >
      <CustomAppTextField style={styles.textFieldStyle} placeholder='Email' onChangeText={
        value => {
          setEmailState(value)
          console.log(value);
        }
      } error={emailError}
      />
      <CustomAppTextField style={styles.textFieldStyle} placeholder='Password' onChangeText={
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
        onPress={() => loginApiAsync()}
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

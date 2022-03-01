import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, Image, ImageBackground
} from 'react-native'
import Button from 'components/Button'
import { colors, images } from 'theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.lightGrayPurple
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover'
  },
  appLogo: {
    alignSelf: 'center',
    marginTop: 90,
    width: 195,
    height: 80
  },
  loginButton: {
    marginTop: 120,
    marginStart: 30,
    marginEnd: 30,
    marginBottom: 10
  },
  normalButton: {
    marginStart: 30,
    marginEnd: 30
  }
})

const LoginView = ({ navigation }) => (
  <View style={styles.root}>
    <ImageBackground style={styles.imageBackground} source={images.app_background}>

      <Image style={styles.appLogo}
        source={images.app_logo} />
      <Button
        title="LOGIN"
        color={colors.colorWhite}
        style={styles.loginButton}
        backgroundColor={colors.colorDimBlack}
      // onPress={() => {
      //   navigation.navigate('Details', { from: 'Home' })
      // }}
      />
      <Button
        title="REGISTER"
        color={colors.colorBlack}
        style={styles.normalButton}
        backgroundColor={colors.transparent}
        borderColor={colors.colorBlack}
        borderWidth={0.5}
      />
    </ImageBackground>
  </View>
)

LoginView.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

LoginView.defaultProps = {
  navigation: { navigate: () => null },
}

export default LoginView

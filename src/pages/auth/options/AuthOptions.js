import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, Image, ImageBackground
} from 'react-native'
import Button from 'components/Button'
import { colors, images, strings } from 'theme'

const styles = StyleSheet.create({
  root: {
    height: '100%',
    flexDirection: 'column',
    backgroundColor: colors.lightGrayPurple
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  imageBackground: {
    height: '100%',
    resizeMode: 'cover'
  },
  appLogo: {
    alignSelf: 'center',
    marginTop: '30%',
    width: 195,
    height: 80
  },
  loginButton: {
    marginTop: '20%',
    marginStart: 30,
    marginEnd: 30,
    marginBottom: 10
  },
  normalButton: {
    marginStart: 30,
    marginEnd: 30
  }
})

const AuthOptions = ({ navigation }) => (
  <View style={styles.root}>
    <ImageBackground style={styles.imageBackground} source={images.app_background}>

      <Image style={styles.appLogo}
        source={images.app_logo} />
      <Button
        title={strings.strLogin}
        color={colors.colorWhite}
        style={styles.loginButton}
        backgroundColor={colors.colorDimBlack}
        onPress={() => {
          navigation.navigate('Login', { from: 'AuthOptions' })
        }}
      />
      <Button
        title={strings.strRegister}
        color={colors.colorBlack}
        style={styles.normalButton}
        backgroundColor={colors.transparent}
        borderColor={colors.colorBlack}
        borderWidth={0.5}
      />
    </ImageBackground>
  </View>
)

AuthOptions.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

AuthOptions.defaultProps = {
  navigation: { navigate: () => null },
}

export default AuthOptions

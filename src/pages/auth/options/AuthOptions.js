import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View,
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
})

const AuthOptions = ({ navigation }) => (
  <View style={styles.root}>
    
    <Text style={styles.title}>Auth</Text>
    
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

import React from 'react'
import PropTypes from 'prop-types'
import { View, SafeAreaView, Text, Image, ToastAndroid } from 'react-native'
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen'
import { DrawerActions } from '@react-navigation/native'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from 'theme'

const styles = {
  root: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40, 
    height: 40, 
    borderRadius: 40/ 2,
    backgroundColor: '#000000',
    paddingHorizontal: 10
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50
  },
  logo_text: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000000',
    // fontSize: Platform.OS === 'ios' ? RFPercentage(2) : RFPercentage(2.1),
    paddingHorizontal: 10,
  },
  menu_text: {
    color: '#000000',
    // fontSize: Platform.OS === 'ios' ? RFPercentage(2) : RFPercentage(2.1),
    paddingHorizontal: 10,
    paddingTop: 25,
  },
}

const DrawerMenu = ({ navigation }) => (
  <SafeAreaView style={styles.root}>
    <View style={styles.head}>
      <FontIcon.Button
        name="times"
        size={20}
        color={colors.gray}
        backgroundColor="white"
        onPress={() => {
          navigation.dispatch(DrawerActions.closeDrawer())
        }}
      />
    </View>
    {/* <View style={styles.main}>
      <Text>Drawer Menu</Text>
    </View> */}
    {/* <Image style={styles.profileImage} 
  source={{
    uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'
  }} 
  
/> */}
<Image style={styles.logo}
 source={{
    uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'
  }}  />
   <View style={styles.logo_text}>
      <Text>Drawer Menu</Text>
    </View>

    <View style={styles.menu_text}>
      <Text>Home</Text>
    </View>

    <View style={styles.menu_text}>
      <Text>Invoices</Text>
    </View>

    <View style={styles.menu_text}>
      <Text>Virtual Wallet</Text>
    </View>

    <View style={styles.menu_text}>
      <Text>Help</Text>
    </View>

    <View style={styles.menu_text}>
      <Text
      onPress={() => showToastWithGravityAndOffset()}
      >Logout</Text>
    </View>
  </SafeAreaView>
)

const showToastWithGravityAndOffset = () => {
  ToastAndroid.showWithGravityAndOffset(
    "You're logged out from the application",
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};

DrawerMenu.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }),
}

DrawerMenu.defaultProps = {
  navigation: {
    dispatch: () => null,
  },
}

export default DrawerMenu

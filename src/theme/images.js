import { Asset } from 'expo-asset'

const images = {
  logo_sm: require('../../assets/images/ic_launcher_round_round.png'),
  logo_lg: require('../../assets/images/ic_launcher_round_round.png'),
  app_logo: require('../../assets/images/app_logo.png'),
  app_background: require('../../assets/images/app_background.png')
}

// image preloading
export const imageAssets = Object.keys(images).map((key) => Asset.fromModule(images[key]).downloadAsync())

export default images

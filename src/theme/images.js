import { Asset } from 'expo-asset'

const images = {
  logo_sm: require('../../assets/images/ic_launcher_round_round.png'),
  logo_lg: require('../../assets/images/ic_launcher_round_round.png'),
}

// image preloading
export const imageAssets = Object.keys(images).map((key) => Asset.fromModule(images[key]).downloadAsync())

export default images

import { LinearGradient } from 'expo-linear-gradient'
import { ImageBackground, View } from 'react-native'
import colors from '../../../themes/colors'
import backgroundStyle from './style'

const image = require('../../../assets/img/background.png')

const { secondary, charcoal } = colors

const BackgroundView: React.FunctionComponent<any> = ({ children }) => (
  <LinearGradient
    colors={[secondary.hover, charcoal]}
    style={backgroundStyle.container}
  >
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={backgroundStyle.container}
      imageStyle={backgroundStyle.imageBackground}
    >
      {children}
    </ImageBackground>
  </LinearGradient>
)

export default BackgroundView

import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import InputForm from '../../components/organisms/InputForm'
import colors from '../../themes/colors'
import homeStyle from './style'

const image = require('../../assets/img/background.png')

const { charcoal, secondary } = colors

const Home = () => (
  <LinearGradient
    colors={[secondary.hover, charcoal]}
    style={homeStyle.container}
  >
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={homeStyle.container}
      imageStyle={homeStyle.imageBackground}
    >
      <InputForm />
    </ImageBackground>
  </LinearGradient>
)

export default Home

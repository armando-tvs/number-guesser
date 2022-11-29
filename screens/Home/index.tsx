import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import InputForm from '../../components/organisms/InputForm'
import colors from '../../themes/colors'
import homeStyle from './style'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import constants from '../../utils/constants'
import { useNumberContext } from '../../context/NumberContext'

const image = require('../../assets/img/background.png')

const {
  screens: { gamePanel }
} = constants
const { charcoal, secondary } = colors

type NavigationProps = NativeStackScreenProps<any, any>

const Home: React.FunctionComponent<NavigationProps> = ({ navigation }) => {
  const { setCurrentNumber } = useNumberContext()
  
  const onSubmit = (currentNumber: number) => {
    setCurrentNumber(currentNumber)
    navigation.navigate(gamePanel)
  }

  return (
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
        <InputForm onSubmit={onSubmit} />
      </ImageBackground>
    </LinearGradient>
  )
}

export default Home

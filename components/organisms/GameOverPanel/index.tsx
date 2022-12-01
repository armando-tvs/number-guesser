import { Image, Text, View } from 'react-native'
import { useNumberContext } from '../../../context/NumberContext'
import PrimaryButton from '../../atoms/PrimaryButton'
import BoxContainer from '../../molecules/BoxContainer'
import gameOverStyle from './style'

const gameOverImg = require('../../../assets/img/gameOver.png')

const GameOverPanel: React.FunctionComponent<any> = () => {
  const {
    guessHistory: { length: totalAttemps },
    resetNumberAndHistory
  } = useNumberContext()

  const totalAttempsMessage = `${totalAttemps} attemp${
    totalAttemps > 1 ? 's' : ''
  }`

  return (
    <BoxContainer style={gameOverStyle.container}>
      <Text style={gameOverStyle.header}>Game Over</Text>
      <Image source={gameOverImg} style={gameOverStyle.imageContainer} />
      <View style={gameOverStyle.feedbackContainer}>
        <Text style={gameOverStyle.feedbackTitle}>It took:</Text>
        <Text style={gameOverStyle.feedbackMessage}>{totalAttempsMessage}</Text>
        <PrimaryButton onPress={resetNumberAndHistory}>Restart</PrimaryButton>
      </View>
    </BoxContainer>
  )
}

export default GameOverPanel

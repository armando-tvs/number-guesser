import { Alert, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import PrimaryButton from '../../components/atoms/PrimaryButton'
import GuessHistory from '../../components/molecules/GuessHistory'
import GuessPanel from '../../components/molecules/GuessPanel'
import BackgroundView from '../../components/organisms/BackgroundView'
import { useNumberContext } from '../../context/NumberContext'
import useNumberGuesser from '../../utils/hooks/useNumberGuesser'
import guessPanelStyle from './style'

const Panel = () => {
  const {
    currentGuess,
    guessHistory,
    isHigherNumber,
    isLowerNumber,
    isLoading
  } = useNumberGuesser()

  const { currentNumber } = useNumberContext()

  const displayAlert = (message: string) => {
    Alert.alert('Invalid action', message, [{ text: 'Try again' }])
  }

  const guessAndCurrentNumberExists = currentGuess && currentNumber
  const higherNumberHandler = () => {
    if (guessAndCurrentNumberExists && currentGuess > currentNumber) {
      displayAlert('You know that the number is already higher')
      return
    }

    isHigherNumber()
  }

  const lowerNumberHandler = () => {
    if (guessAndCurrentNumberExists && currentGuess < currentNumber) {
      displayAlert('You know that the number is already lower')
      return
    }

    isLowerNumber()
  }

  return (
    <BackgroundView>
      <GuessPanel isLoading={isLoading} value={currentGuess} />
      <View style={guessPanelStyle.buttonsContainer}>
        <PrimaryButton onPress={lowerNumberHandler}>
          <FontAwesome name="minus" size={24} />
        </PrimaryButton>
        <PrimaryButton onPress={higherNumberHandler}>
          <FontAwesome name="plus" size={24} />
        </PrimaryButton>
      </View>
      <GuessHistory items={guessHistory} />
    </BackgroundView>
  )
}

export default Panel

import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { useNumberContext } from '../../../context/NumberContext'
import BoxContainer from '../BoxContainer'
import GuessPanelProps from './GuessPanelProps'
import guessPanelStyle from './style'

const GuessPanel: React.FunctionComponent<GuessPanelProps> = ({
  isLoading = false,
  value
}) => {
  const { currentNumber } = useNumberContext()
  const [guessText, setGuessText] = useState<string | number>()

  useEffect(() => {
    setGuessText(() => {
      if (isLoading) return '...'

      if (value === currentNumber) return 'OVER'

      return value
    })
  }, [value, isLoading, currentNumber])

  return (
    <BoxContainer style={guessPanelStyle.container}>
      <Text style={guessPanelStyle.title}>Is this your number?</Text>
      <Text style={guessPanelStyle.currentGuess}>{guessText}</Text>
    </BoxContainer>
  )
}

export default GuessPanel

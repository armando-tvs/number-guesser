import { StyleSheet } from 'react-native'
import colors from '../../../themes/colors'

const { charcoal, gray, primary } = colors

const guessPanelStyle = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 16,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 32
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  currentGuess: {
    fontSize: 64,
    fontWeight: 'bold',
    color: primary.regular
  }
})

export default guessPanelStyle

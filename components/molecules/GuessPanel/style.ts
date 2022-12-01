import { StyleSheet } from 'react-native'
import colors from '../../../themes/colors'

const { charcoal, gray, primary } = colors

const guessPanelStyle = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 16,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
    width: '80%',
    height: '40%',
    borderRadius: 16,
    backgroundColor: gray,
    padding: 32,
    elevation: 4,
    shadowColor: charcoal,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 6,
    shadowOpacity: 0.25
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

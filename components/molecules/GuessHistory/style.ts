import { StyleSheet } from 'react-native'
import colors from '../../../themes/colors'

const { light, secondary } = colors

const guessHistoryStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: light,
    borderRadius: 16,
    width: '80%',
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginTop: 16
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  itemContainer: {
    marginVertical: 16,
    backgroundColor: secondary.hover,
    borderRadius: 8,
    height: 48,
    justifyContent: 'center',
    width: '100%',
    alignSelf: 'center'
  },
  itemContent: {
    color: light,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24
  }
})

export default guessHistoryStyle

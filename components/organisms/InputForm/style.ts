import { StyleSheet } from 'react-native'
import colors from '../../../themes/colors'

const { primary, charcoal, gray } = colors

const InputFormStyle = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '80%',
    height: '40%',
    borderRadius: 16,
    backgroundColor: gray,
    padding: 16,
    elevation: 4,
    shadowColor: charcoal,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 6,
    shadowOpacity: 0.25
  },
  hintContainer: {
    fontSize: 24,
    textAlign: 'center'
  },
  inputField: {
    height: 50,
    fontSize: 32,
    borderBottomWidth: 2,
    borderBottomColor: primary.regular,
    color: primary.regular,
    marginVertical: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    width: 96,
    alignSelf: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1,
    margin: 16
  }
})

export default InputFormStyle

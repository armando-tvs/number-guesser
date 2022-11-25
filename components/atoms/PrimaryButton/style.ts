import { StyleSheet } from 'react-native'
import colors from '../../../themes/colors'

const { primary } = colors

const ButtonStyle = StyleSheet.create({
  outerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 4,
    backgroundColor: primary.regular,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    minWidth: 120
  },
  innerContainer: {
    padding: 16
  },
  content: {
    color: colors.light,
    fontSize: 16,
    textAlign: 'center'
  },
  pressed: {
    backgroundColor: primary.hover
  }
})

export default ButtonStyle

import { StyleSheet } from "react-native";
import colors from "../../../themes/colors";

const { gray, charcoal } = colors

const boxContainerStyle = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignSelf: 'center',
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
  }
})

export default boxContainerStyle

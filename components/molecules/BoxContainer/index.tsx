import { View, ViewProps } from "react-native";
import boxContainerStyle from "./style";

const BoxContainer: React.FunctionComponent<ViewProps> = ({ children, style }) => (
  <View style={[boxContainerStyle.container, style]}>
    {children}
  </View>
)

export default BoxContainer

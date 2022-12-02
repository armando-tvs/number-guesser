import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useNumberContext } from "../context/NumberContext"
import Home from "../screens/Home"
import Panel from "../screens/Panel"
import Results from "../screens/Results"
import constants from "../utils/constants"

const { screens: { home, gamePanel, results } } = constants

const Stack = createNativeStackNavigator()

const screenOptions = {
  headerShown: false
}

const Routes: React.FunctionComponent<any> = () => {
  const { currentGuess, currentNumber } = useNumberContext()

  const renderRoutes = (): React.ReactElement<any> => {
    if (currentNumber && currentNumber !== currentGuess) return <Stack.Screen name={gamePanel} component={Panel} />

    if (currentNumber && currentGuess && currentNumber === currentGuess) return <Stack.Screen name={results} component={Results} />

    return <Stack.Screen name={home} component={Home} />
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={home} screenOptions={screenOptions}>
        {renderRoutes()}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NumberContextProvider from './context/NumberContext'
import Home from './screens/Home'
import Panel from './screens/Panel'
import Results from './screens/Results'
import constants from './utils/constants'

const {
  screens: { home, gamePanel, results }
} = constants
const Stack = createNativeStackNavigator()

const screenOptions = {
  headerShown: false
}

export default function App() {
  return (
    <NumberContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={home} screenOptions={screenOptions}>
          <Stack.Screen name={home} component={Home} />
          <Stack.Screen name={gamePanel} component={Panel} />
          <Stack.Screen name={results} component={Results} />
        </Stack.Navigator>
      </NavigationContainer>
    </NumberContextProvider>
  )
}

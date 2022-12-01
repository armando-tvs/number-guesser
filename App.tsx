import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NumberContextProvider from './context/NumberContext'
import Home from './screens/Home'
import Panel from './screens/Panel'
import constants from './utils/constants'

const {
  screens: { home, gamePanel }
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
        </Stack.Navigator>
      </NavigationContainer>
    </NumberContextProvider>
  )
}

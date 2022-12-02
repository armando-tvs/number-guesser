import { NavigationContainer } from '@react-navigation/native'
import NumberContextProvider from './context/NumberContext'
import Routes from './routes'

export default function App() {
  return (
    <NumberContextProvider>
      <Routes />
    </NumberContextProvider>
  )
}

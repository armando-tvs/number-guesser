import InputForm from '../../components/molecules/InputForm'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import constants from '../../utils/constants'
import { useNumberContext } from '../../context/NumberContext'
import BackgroundView from '../../components/organisms/BackgroundView'

const {
  screens: { gamePanel }
} = constants

type NavigationProps = NativeStackScreenProps<any, any>

const Home: React.FunctionComponent<NavigationProps> = ({ navigation }) => {
  const { currentNumber, setCurrentNumber } = useNumberContext()

  const onSubmit = (currentNumber: number) => {
    setCurrentNumber(currentNumber)
    navigation.navigate(gamePanel)
  }

  if (currentNumber) {
    navigation.replace(gamePanel)
  }

  return (
    <BackgroundView>
      <InputForm onSubmit={onSubmit} />
    </BackgroundView>
  )
}

export default Home

import InputForm from '../../components/molecules/InputForm'
import { useNumberContext } from '../../context/NumberContext'
import BackgroundView from '../../components/organisms/BackgroundView'

const Home: React.FunctionComponent<any> = () => {
  const { setCurrentNumber } = useNumberContext()

  const onSubmit = (currentNumber: number) => {
    setCurrentNumber(currentNumber)
  }

  return (
    <BackgroundView>
      <InputForm onSubmit={onSubmit} />
    </BackgroundView>
  )
}

export default Home

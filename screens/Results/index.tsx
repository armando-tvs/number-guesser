import { Text } from 'react-native'
import BoxContainer from '../../components/molecules/BoxContainer'
import BackgroundView from '../../components/organisms/BackgroundView'
import GameOverPanel from '../../components/organisms/GameOverPanel'

const Results: React.FunctionComponent<any> = () => (
  <BackgroundView>
    <GameOverPanel />
  </BackgroundView>
)

export default Results

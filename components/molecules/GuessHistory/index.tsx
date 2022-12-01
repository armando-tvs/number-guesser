import { FlatList, Text, View } from 'react-native'
import BoxContainer from '../BoxContainer'
import GuessHistoryProps from './GuessHistoryProps'
import guessHistoryStyle from './style'

const GuessHistory: React.FunctionComponent<GuessHistoryProps> = ({
  items
}) => (
  <BoxContainer style={guessHistoryStyle.container}>
    <Text style={guessHistoryStyle.header}>Prev attemps ({items.length})</Text>
    <FlatList
      data={items}
      style={{ width: '100%' }}
      renderItem={({ item }) => (
        <View style={guessHistoryStyle.itemContainer}>
          <Text style={guessHistoryStyle.itemContent}>{item}</Text>
        </View>
      )}
    />
  </BoxContainer>
)

export default GuessHistory

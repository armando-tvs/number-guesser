import { FlatList, Text, View } from 'react-native'
import GuessHistoryProps from './GuessHistoryProps'
import guessHistoryStyle from './style'

const GuessHistory: React.FunctionComponent<GuessHistoryProps> = ({
  items
}) => (
  <View style={guessHistoryStyle.container}>
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
  </View>
)

export default GuessHistory

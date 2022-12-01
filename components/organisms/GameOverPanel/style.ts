import { StyleSheet } from 'react-native'

const gameOverStyle = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 64,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 32
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  imageContainer: {
    width: 256,
    height: 256,
    borderRadius: 128,
    marginTop: 64,
    marginBottom: 32
  },
  feedbackContainer: {
    justifyContent: 'center'
  },
  feedbackTitle: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center'
  },
  feedbackMessage: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center'
  }
})

export default gameOverStyle

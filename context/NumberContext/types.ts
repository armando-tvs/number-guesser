interface NumberContextType {
  currentNumber: number | undefined
  setCurrentNumber: Function
  guessHistory: Array<number>
  updateHistory: Function
  resetNumberAndHistory: () => void
  isHigherNumber: () => void
  isLowerNumber: () => void
  currentGuess: number | undefined
  isLoading: boolean
}

export default NumberContextType

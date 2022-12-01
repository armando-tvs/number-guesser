import { useCallback, useEffect, useState } from 'react'

interface NumberGuesser {
  isHigherNumber: () => void
  isLowerNumber: () => void
  currentGuess: number | undefined
  isLoading: boolean
  guessHistory: Array<number>
}

const setNumberToGuess = (min: number, max: number, currentNumber: number): number => {
  const numberToGuess = Math.floor(Math.random() * (max - min)) + min

  if (numberToGuess === currentNumber) return setNumberToGuess(min, max, currentNumber)

  return numberToGuess
}

const useNumberGuesser = (): NumberGuesser => {
  const [isLoading, setLoading] = useState<boolean>(false)
  const [currentGuess, setCurrentGuess] = useState<number>(0)
  const [minNumber, setMinNumber] = useState<number>(0)
  const [maxNumber, setMaxNumber] = useState<number>(100)
  const [guessHistory, setGuessHistory] = useState<Array<number>>([])

  const updateHistory = () =>
    setGuessHistory((currentHistory) => [currentGuess, ...currentHistory])

  const getNumberGuess = useCallback(() => {
    setLoading(true)
    setCurrentGuess(current => setNumberToGuess(minNumber, maxNumber, current))

    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [maxNumber, minNumber])

  useEffect(() => {
    getNumberGuess()
  }, [minNumber, maxNumber])

  const isHigherNumber = () => {
    updateHistory()
    setMinNumber((value) => (value === currentGuess ? value + 1 : currentGuess))
  }

  const isLowerNumber = () => {
    updateHistory()
    setMaxNumber((value) => (value === currentGuess ? value - 1 : currentGuess))
  }

  return {
    isHigherNumber,
    isLoading,
    isLowerNumber,
    currentGuess,
    guessHistory
  }
}

export default useNumberGuesser

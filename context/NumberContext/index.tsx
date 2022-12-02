import React, { useCallback, useContext, useEffect, useState } from 'react'
import NumberContextType from './types'

const defaultContextValue = {
  currentNumber: undefined,
  setCurrentNumber: () => {},
  guessHistory: [],
  updateHistory: () => {},
  resetNumberAndHistory: () => {},
  isHigherNumber: () => {},
  isLowerNumber: () => {},
  currentGuess: undefined,
  isLoading: false
}

const setNumberToGuess = (
  min: number,
  max: number,
  currentNumber: number
): number => {
  const numberToGuess = Math.floor(Math.random() * (max - min)) + min

  if (numberToGuess === currentNumber) {
    return setNumberToGuess(min, max, currentNumber)
  }

  return numberToGuess
}

const NumberContext =
  React.createContext<NumberContextType>(defaultContextValue)

const NumberContextProvider: React.FunctionComponent<any> = ({ children }) => {
  const [currentNumber, setCurrentNumber] = useState<number>()
  const [guessHistory, setGuessHistory] = useState<Array<number>>([])
  const [isLoading, setLoading] = useState<boolean>(false)
  const [currentGuess, setCurrentGuess] = useState<number>(0)
  const [minNumber, setMinNumber] = useState<number>(0)
  const [maxNumber, setMaxNumber] = useState<number>(100)

  const resetNumberAndHistory = () => {
    setCurrentNumber(undefined)
    setGuessHistory([])
  }

  const updateHistory = (item: number) => {
    setGuessHistory((history) => [item, ...history])
  }

  const getNumberGuess = useCallback(() => {
    setLoading(true)
    setCurrentGuess((current) =>
      setNumberToGuess(minNumber, maxNumber, current)
    )

    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [maxNumber, minNumber])

  const enabled = currentGuess !== currentNumber

  useEffect(() => {
    getNumberGuess()
  }, [minNumber, maxNumber])

  const isHigherNumber = () => {
    if (!enabled) return
    updateHistory(currentGuess)
    setMinNumber((value) => (value === currentGuess ? value + 1 : currentGuess))
  }

  const isLowerNumber = () => {
    if (!enabled) return
    updateHistory(currentGuess)
    setMaxNumber((value) => (value === currentGuess ? value - 1 : currentGuess))
  }

  return (
    <NumberContext.Provider
      value={{
        currentNumber,
        setCurrentNumber,
        guessHistory,
        updateHistory,
        resetNumberAndHistory,
        isHigherNumber,
        isLowerNumber,
        currentGuess,
        isLoading
      }}
    >
      {children}
    </NumberContext.Provider>
  )
}

export const useNumberContext = () => useContext(NumberContext)

export default NumberContextProvider

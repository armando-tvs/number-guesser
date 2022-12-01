import React, { useContext, useState } from 'react'

interface NumberContextType {
  currentNumber: number | undefined
  setCurrentNumber: Function
  guessHistory: Array<number>
  updateHistory: Function
  resetNumberAndHistory: () => void
}

const defaultContextValue = {
  currentNumber: undefined,
  setCurrentNumber: () => {},
  guessHistory: [],
  updateHistory: () => {},
  resetNumberAndHistory: () => {}
}

const NumberContext =
  React.createContext<NumberContextType>(defaultContextValue)

const NumberContextProvider: React.FunctionComponent<any> = ({ children }) => {
  const [currentNumber, setCurrentNumber] = useState<number>()
  const [guessHistory, setGuessHistory] = useState<Array<number>>([])

  const resetNumberAndHistory = () => {
    setCurrentNumber(undefined)
    setGuessHistory([])
  }

  const updateHistory = (item: number) => {
    setGuessHistory((history) => [item, ...history])
  }

  return (
    <NumberContext.Provider
      value={{
        currentNumber,
        setCurrentNumber,
        guessHistory,
        updateHistory,
        resetNumberAndHistory
      }}
    >
      {children}
    </NumberContext.Provider>
  )
}

export const useNumberContext = () => useContext(NumberContext)

export default NumberContextProvider

import React, { useContext, useState } from "react"

interface NumberContextType {
  currentNumber: number | undefined
  setCurrentNumber: Function
}

const defaultContextValue = {
  currentNumber: undefined,
  setCurrentNumber: () => {}
}

const NumberContext = React.createContext<NumberContextType>(defaultContextValue)

const NumberContextProvider: React.FunctionComponent<any> = ({ children }) => {
  const [currentNumber, setCurrentNumber] = useState<number>()

  return (
    <NumberContext.Provider value={{  currentNumber, setCurrentNumber }}>
      {children}
    </NumberContext.Provider>
  )
}

export const useNumberContext = () => useContext(NumberContext)

export default NumberContextProvider

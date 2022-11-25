import { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import PrimaryButton from '../../atoms/PrimaryButton'
import InputFormStyle from './style'

const isNumericValue = (value: string): boolean => {
  const numberRegex = new RegExp(/^\d+$/g)
  return numberRegex.test(value)
}

const InputForm = () => {
  const [inputValue, setInputValue] = useState<string>('')

  const inputValueHandler = (textValue: string) => {
    setInputValue((prevValue) =>
      isNumericValue(textValue) || !textValue ? textValue : prevValue
    )
  }

  const resetInput = (): void => setInputValue('')

  return (
    <View style={InputFormStyle.container}>
      <Text style={InputFormStyle.hintContainer}>Number to guess:</Text>
      <TextInput
        value={inputValue}
        onChangeText={inputValueHandler}
        style={InputFormStyle.inputField}
        keyboardType="number-pad"
        maxLength={2}
      />
      <View style={InputFormStyle.buttonsContainer}>
        <View style={InputFormStyle.buttonContainer}>
          <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
        </View>
        <View style={InputFormStyle.buttonContainer}>
          <PrimaryButton>Enter</PrimaryButton>
        </View>
      </View>
    </View>
  )
}

export default InputForm

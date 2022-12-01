import { useCallback, useState } from 'react'
import { Alert, Text, TextInput, View } from 'react-native'
import PrimaryButton from '../../atoms/PrimaryButton'
import BoxContainer from '../BoxContainer'
import InputFormProps from './inputFormProps'
import InputFormStyle from './style'

const isNumericValue = (value: string): boolean => {
  const numberRegex = new RegExp(/^\d+$/g)
  return numberRegex.test(value)
}

const InputForm: React.FunctionComponent<InputFormProps> = ({
  onReset: onResetCallback,
  onSubmit
}) => {
  const [inputValue, setInputValue] = useState<string>('')

  const inputValueHandler = (textValue: string) => {
    setInputValue((prevValue) =>
      isNumericValue(textValue) || !textValue ? textValue : prevValue
    )
  }

  const resetInputValue = (): void => setInputValue('')

  const onReset = (): void => {
    onResetCallback?.()
    resetInputValue()
  }

  const onConfirm = useCallback((): void => {
    const inputValueToInt = parseInt(inputValue)

    if (isNaN(inputValueToInt) || inputValueToInt < 1 || inputValueToInt > 99) {
      Alert.alert('Out of range', 'Value should be between 0 to 99', [
        { text: 'Close', onPress: resetInputValue }
      ])
      return
    }

    resetInputValue()
    onSubmit(inputValueToInt)
  }, [inputValue])

  return (
    <BoxContainer>
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
          <PrimaryButton onPress={onReset}>Reset</PrimaryButton>
        </View>
        <View style={InputFormStyle.buttonContainer}>
          <PrimaryButton onPress={onConfirm}>Enter</PrimaryButton>
        </View>
      </View>
    </BoxContainer>
  )
}

export default InputForm

import React from 'react'
import { Pressable, Text, View } from 'react-native'
import colors from '../../../themes/colors'
import ButtonProps from './buttonProps'
import ButtonStyle from './style'

const PrimaryButton: React.FunctionComponent<ButtonProps> = ({
  onPress,
  children
}) => (
  <View style={ButtonStyle.outerContainer}>
    <Pressable
      style={({ pressed }) => {
        const pressedStyle = pressed ? ButtonStyle.pressed : null

        return [ButtonStyle.innerContainer, pressedStyle]
      }}
      onPress={onPress}
      android_ripple={{ color: colors.primary.hover }}
    >
      <Text style={ButtonStyle.content}>{children}</Text>
    </Pressable>
  </View>
)

export default PrimaryButton

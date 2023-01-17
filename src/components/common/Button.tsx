import { useState } from 'react';
import { GestureResponderEvent } from 'react-native';
import { Button as NativeBaseButton, Text } from 'native-base';
import Colors from '@assets/colors';

interface ButtonProps {
  bgColor?: string;
  onPress: (event: GestureResponderEvent) => void;
  pressedBgColor?: string;
  text: string;
  width?: number | string;
}

const Button = ({ bgColor, onPress, pressedBgColor, text, width }: ButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <NativeBaseButton
      onPress={onPress}
      bgColor={isPressed ? pressedBgColor : bgColor}
      borderRadius={20}
      height={45}
      width={width}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      <Text color={Colors.white} fontSize={15} fontWeight={700}>
        {text}
      </Text>
    </NativeBaseButton>
  );
};

export default Button;

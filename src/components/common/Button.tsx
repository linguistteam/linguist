import { useState } from 'react';
import { GestureResponderEvent } from 'react-native';
import { Button as NativeBaseButton, Text } from 'native-base';
import Colors from '@assets/colors';

interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  text: string;
  width?: number | string;
}

const Button = ({ onPress, text, width }: ButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <NativeBaseButton
      onPress={onPress}
      bgColor={isPressed ? Colors.lightenedBlueMagenta : Colors.blueMagenta}
      borderRadius={20}
      height={45}
      width={width}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      <Text color={Colors.white} fontSize={15} fontWeight={700} textTransform="uppercase">
        {text}
      </Text>
    </NativeBaseButton>
  );
};

export default Button;

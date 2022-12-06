import { GestureResponderEvent } from 'react-native';
import { Button as NativeBaseButton, Text } from 'native-base';
import Colors from '@assets/colors';

type ButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
  text: string;
  width?: number | string;
};

const Button = ({ onPress, text, width }: ButtonProps) => (
  <NativeBaseButton
    onPress={onPress}
    bgColor={Colors.blueMagenta}
    borderRadius={20}
    height={45}
    width={width}
  >
    <Text color={Colors.white} fontSize={15} fontWeight={700} textTransform="uppercase">
      {text}
    </Text>
  </NativeBaseButton>
);

export default Button;

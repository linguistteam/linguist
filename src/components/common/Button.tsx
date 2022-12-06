import { Button as NativeBaseButton, Text } from 'native-base';
import Colors from '../../assets/colors';

type ButtonProps = {
  text: string;
};

const Button = ({ text }: ButtonProps) => (
  <NativeBaseButton bgColor={Colors.blueMagenta} borderRadius={20} height={45}>
    <Text color={Colors.white} fontSize={15} fontWeight={700} textTransform="uppercase">
      {text}
    </Text>
  </NativeBaseButton>
);

export default Button;

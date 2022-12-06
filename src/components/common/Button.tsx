import { Button as NativeBaseButton, View } from 'native-base';

type ButtonProps = {
  text: string;
};

const Button = ({ text }: ButtonProps) => {
  return (
    <View>
      <NativeBaseButton>{text}</NativeBaseButton>
    </View>
  );
};

export default Button;

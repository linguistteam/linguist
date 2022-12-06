import { Button as NativeBaseButton } from 'native-base';

type ButtonProps = {
  text: string;
};

const Button = ({ text }: ButtonProps) => <NativeBaseButton>{text}</NativeBaseButton>;

export default Button;

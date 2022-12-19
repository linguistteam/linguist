import { Button, View } from 'native-base';

interface SeeMoreButtonProps {
  content: string;
}

const SeeMoreButton = ({ content }: SeeMoreButtonProps) => (
  <View>
    <Button>{content}</Button>
  </View>
);

export default SeeMoreButton;

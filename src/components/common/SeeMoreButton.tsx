import { Button, Text, View } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '@assets/colors';

interface SeeMoreButtonProps {
  content: string;
}

const SeeMoreButton = ({ content }: SeeMoreButtonProps) => (
  <View>
    <Button
      leftIcon={<Icon name="md-chevron-down-circle" color={Colors.blueMagenta} size={18} />}
      variant="unstyled"
    >
      <Text fontWeight="bold">{content}</Text>
    </Button>
  </View>
);

export default SeeMoreButton;

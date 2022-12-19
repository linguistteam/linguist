import { Button, Text, View } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '@assets/colors';

interface SeeMoreButtonProps {
  content: string;
  isLoading: boolean;
  loadingText?: string;
}

const SeeMoreButton = ({ content, isLoading, loadingText }: SeeMoreButtonProps) => (
  <View>
    <Button
      isLoading={isLoading}
      isLoadingText={loadingText}
      leftIcon={<Icon name="md-chevron-down-circle" color={Colors.blueMagenta} size={18} />}
      variant="unstyled"
    >
      <Text fontWeight="bold">{content}</Text>
    </Button>
  </View>
);

export default SeeMoreButton;

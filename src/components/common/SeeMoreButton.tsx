import { GestureResponderEvent } from 'react-native';
import { Button, Text, View } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '@assets/colors';

interface SeeMoreButtonProps {
  content: string;
  isLoading: boolean;
  loadingText?: string;
  onPress: (event: GestureResponderEvent) => void;
}

// TODO: See if theme Button variant can be added for this
const SeeMoreButton = ({ content, isLoading, loadingText, onPress }: SeeMoreButtonProps) => (
  <View>
    <Button
      onPress={onPress}
      isLoading={isLoading}
      isLoadingText={loadingText}
      leftIcon={<Icon name="md-chevron-down-circle" color={Colors.blueMagenta} size={18} />}
      variant="unstyled"
      _spinner={{ color: Colors.blueMagenta }}
      _loading={{ _text: { color: Colors.grey } }}
    >
      <Text fontWeight="bold">{content}</Text>
    </Button>
  </View>
);

export default SeeMoreButton;

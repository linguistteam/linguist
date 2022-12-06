import { Flex, Text } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '@assets/colors';
import { topLinguistBadgeStyles } from './styles';

const TopLinguistBadge = () => (
  <Flex direction="row">
    <Icon
      name="star-shooting"
      size={20}
      color={Colors.yellow}
      style={topLinguistBadgeStyles.icon}
    />

    <Text color={Colors.grey} fontSize="sm">
      Top Linguist
    </Text>
  </Flex>
);

export default TopLinguistBadge;

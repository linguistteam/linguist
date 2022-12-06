import { Flex, Text } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '@assets/colors';
import { topLinguistBadgeStyles } from './styles';

type TopLinguistBadgeProps = {
  isTopLinguist: boolean;
};

const TopLinguistBadge = ({ isTopLinguist }: TopLinguistBadgeProps) => {
  if (!isTopLinguist) return null;

  return (
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
};

export default TopLinguistBadge;

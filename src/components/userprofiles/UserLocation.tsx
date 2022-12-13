import { Text, View } from 'native-base';
import Colors from '@assets/colors';
import { userLocationStyles } from './styles';

const UserLocation = () => {
  // TODO: When user location text length is longer than
  // certain amount of chars, truncate the text
  const userLocation = 'Philadelphia, Pennsylvania, USA';

  return (
    <View style={userLocationStyles.container}>
      <Text color={Colors.grey} fontSize="sm">
        {userLocation}
      </Text>
    </View>
  );
};

export default UserLocation;

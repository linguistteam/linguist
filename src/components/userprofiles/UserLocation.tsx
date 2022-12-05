import { Text, View } from 'native-base';
import Colors from '../../assets/colors';

const UserLocation = () => {
  // TODO: Figure out how location data should be formatted
  const userLocation = 'Philadelphia, Pennsylvania';

  return (
    <View>
      <Text bold color={Colors.grey} fontSize="sm">
        {userLocation}
      </Text>
    </View>
  );
};

export default UserLocation;

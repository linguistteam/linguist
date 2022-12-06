import { Text, View } from 'native-base';
import Colors from '../../assets/colors';
import { userLocationStyles } from './styles';

const UserLocation = () => {
  // NOTE: When we have international country, display like:
  // Frankfurt, Germany (omit the state)
  const userCity = 'Philadelphia';
  const userState = 'Pennsylvania';

  return (
    <View style={userLocationStyles.container}>
      <Text bold color={Colors.grey} fontSize="sm">
        {userCity}, {userState}
      </Text>
    </View>
  );
};

export default UserLocation;

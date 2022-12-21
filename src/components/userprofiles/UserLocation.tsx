import { Text, View } from 'native-base';
import Colors from '@assets/colors';
import { userLocationStyles } from './styles';

interface UserLocationProps {
  location: string;
}

const UserLocation = ({ location }: UserLocationProps) => {
  return (
    <View style={userLocationStyles.container}>
      <Text color={Colors.grey} fontSize="sm">
        {location}
      </Text>
    </View>
  );
};

export default UserLocation;

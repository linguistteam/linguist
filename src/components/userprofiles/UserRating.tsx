import { View } from 'react-native';
import { Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../assets/colors';
import { userRatingStyles } from './styles';

const UserRating = () => {
  // TODO: Should be passed in from DB
  const rating = 4.5;

  return (
    <View style={userRatingStyles.container}>
      <Icon name="star" size={19} color={Colors.yellow} />
      <Text bold color={Colors.grey} fontSize="sm" style={userRatingStyles.contentItem}>
        {rating}
      </Text>
    </View>
  );
};

export default UserRating;

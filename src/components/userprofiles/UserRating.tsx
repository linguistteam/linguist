import { Text, View } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../assets/colors';
import { userRatingStyles } from './styles';

const UserRating = () => {
  // TODO: Should be passed in from DB
  const rating = 4.5;
  const reviews = 474;

  return (
    <View style={userRatingStyles.container}>
      <Icon name="star" size={19} color={Colors.yellow} />

      <Text bold color={Colors.grey} fontSize="sm" style={userRatingStyles.rating}>
        {rating}
      </Text>

      <Text bold color={Colors.grey} fontSize="sm" style={userRatingStyles.divider}>
        ·
      </Text>

      {/* TODO: Clicking on Reviews should jump user to Reviews section */}
      <Text bold color={Colors.grey} fontSize="sm" style={userRatingStyles.reviews}>
        {reviews} Reviews
      </Text>
    </View>
  );
};

export default UserRating;

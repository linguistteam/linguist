import { View } from 'react-native';
import { Text } from 'native-base';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { styles } from './styles';

const UserRating = () => {
  const rating = 4.5;

  return (
    <View style={styles.container}>
      <Text bold color="#2980F2" fontSize="xl" style={styles.contentItem}>
        {rating}
      </Text>
      <StarRatingDisplay color="#2980F2" rating={rating} starSize={25} style={styles.contentItem} />
    </View>
  );
};

export default UserRating;

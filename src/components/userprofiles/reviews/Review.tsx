import { Text, View } from 'native-base';
import { DateTime } from 'luxon';
import Colors from '@assets/colors';
import { reviewStyles } from './styles';
import { ReviewType } from './Reviews';

// TODO: Add proper type
// TODO: Add Luxon to format date
const Review = ({ name, review, reviewDate }: any) => (
  <View style={reviewStyles.reviewContainer}>
    <Text bold>{name}</Text>
    <Text bold fontSize="xs" color={Colors.grey}>
      {reviewDate.format('LL')}
    </Text>
    <Text style={reviewStyles.reviewText}>{review}</Text>
  </View>
);

export default Review;

import { Text, View } from 'native-base';
import { Moment } from 'moment';
import Colors from '@assets/colors';
import { reviewStyles } from './styles';

interface ReviewProps {
  name: string;
  review: string;
  reviewDate: Moment;
}

const Review = ({ name, review, reviewDate }: ReviewProps) => (
  <View style={reviewStyles.reviewContainer}>
    <Text bold>{name}</Text>
    <Text bold fontSize="xs" color={Colors.grey}>
      {reviewDate.format('LL')}
    </Text>
    <Text style={reviewStyles.reviewText}>{review}</Text>
  </View>
);

export default Review;

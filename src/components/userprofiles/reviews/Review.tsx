import { Flex, Text, View } from 'native-base';
import { Moment } from 'moment';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import Colors from '@assets/colors';
import { reviewStyles } from './styles';

interface ReviewProps {
  name: string;
  rating: number;
  review: string;
  reviewDate: Moment;
}

const Review = ({ name, rating, review, reviewDate }: ReviewProps) => (
  <View style={reviewStyles.reviewContainer}>
    <Flex direction="row" justifyContent="space-between">
      <Text bold>{name}</Text>
      <StarRatingDisplay color={Colors.blueMagenta} rating={rating} starSize={17} />
    </Flex>

    <Text bold fontSize="xs" color={Colors.grey}>
      {reviewDate.format('LL')}
    </Text>
    <Text style={reviewStyles.reviewText}>{review}</Text>
  </View>
);

export default Review;

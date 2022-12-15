import { Avatar, Flex, Text, View } from 'native-base';
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
      <View>
        <Avatar
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          }}
        >
          AJ
        </Avatar>
        <Text bold>{name}</Text>
      </View>

      <StarRatingDisplay color={Colors.blueMagenta} rating={rating} starSize={17} />
    </Flex>

    <Text bold fontSize="xs" color={Colors.grey}>
      {reviewDate.format('LL')}
    </Text>
    <Text style={reviewStyles.reviewText}>{review}</Text>
  </View>
);

export default Review;

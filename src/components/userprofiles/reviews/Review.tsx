import { Avatar, Flex, Text, View } from 'native-base';
import { Moment } from 'moment';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import Colors from '@assets/colors';
import { reviewStyles } from './styles';

interface ReviewProps {
  name: string;
  profileImage: string;
  rating: number;
  review: string;
  reviewDate: Moment;
}

const Review = ({ name, profileImage, rating, review, reviewDate }: ReviewProps) => (
  <View style={reviewStyles.reviewContainer}>
    <Flex direction="row" justifyContent="space-between">
      <View>
        <Avatar
          bg={Colors.blueMagenta}
          source={{
            uri: profileImage,
          }}
        >
          {/* TODO: Convert user's name to initials */}
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

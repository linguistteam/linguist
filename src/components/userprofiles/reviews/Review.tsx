import { useEffect, useState } from 'react';
import { Avatar, Flex, Text, View } from 'native-base';
import { Moment } from 'moment';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import Colors from '@assets/colors';
import { truncateText } from '@utils';
import { reviewStyles } from './styles';

interface ReviewProps {
  name: string;
  profileImage: string;
  rating: number;
  review: string;
  reviewDate: Moment;
}

const Review = ({ name, profileImage, rating, review, reviewDate }: ReviewProps) => {
  const reviewLongerThan200Chars = review.length > 200;

  const [truncateReview, setTruncateReview] = useState(false);

  useEffect(() => {
    if (review && reviewLongerThan200Chars) {
      setTruncateReview(true);
    }
  }, [review, reviewLongerThan200Chars]);

  return (
    <View style={reviewStyles.reviewContainer}>
      <Flex direction="row" justifyContent="space-between">
        <View style={reviewStyles.avatarContainer}>
          <Avatar
            bg={Colors.blueMagenta}
            source={{
              uri: profileImage,
            }}
          >
            {/* TODO: Convert user's name to initials */}
            AJ
          </Avatar>
        </View>

        <View style={reviewStyles.reviewContentContainer}>
          <Flex direction="row" justifyContent="space-between">
            <View>
              <Text bold>{name}</Text>

              <Text bold fontSize="xs" color={Colors.grey}>
                {reviewDate.format('LL')}
              </Text>
            </View>

            <StarRatingDisplay color={Colors.blueMagenta} rating={rating} starSize={17} />
          </Flex>

          <View style={reviewStyles.reviewText}>
            <Text>
              {truncateText(truncateReview, review)}{' '}
              {reviewLongerThan200Chars && (
                <Text bold underline onPress={() => setTruncateReview(!truncateReview)}>
                  {truncateReview ? 'read more' : 'read less'}
                </Text>
              )}
            </Text>
          </View>
        </View>
      </Flex>
    </View>
  );
};

export default Review;

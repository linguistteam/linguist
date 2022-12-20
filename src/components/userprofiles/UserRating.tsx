import { Text, View } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '@assets/colors';
import { EN } from '@assets/strings';
import { ReviewType, ReviewsType } from '@components/userprofiles/reviews/Reviews';
import { userRatingStyles } from './styles';

interface UserRatingProps {
  reviews: ReviewsType;
}

const UserRating = ({ reviews }: UserRatingProps) => {
  // TODO: Should be passed in from DB
  console.log('reviews from clients', reviews.fromClients);
  // console.log('reviews', reviews);

  const ratingAverage = (array: ReviewType[]) =>
    array.reduce((a: ReviewType, b: ReviewType) => a.rating + b.rating) / array.length;

  console.log('ratingAverage', ratingAverage(reviews.fromClients));

  const rating = 4.5;
  const numberOfReviews = (array: ReviewType[]) => array.length;

  const combinedReviews =
    numberOfReviews(reviews.fromClients) + numberOfReviews(reviews.fromTranslators);

  return (
    <View style={userRatingStyles.container}>
      <Icon name="star" size={19} color={Colors.yellow} />

      <Text bold color={Colors.grey} fontSize="sm" style={userRatingStyles.rating}>
        {rating}
      </Text>

      <Text bold color={Colors.grey} fontSize="sm" style={userRatingStyles.divider}>
        ·
      </Text>

      <Text bold color={Colors.grey} fontSize="sm">
        {combinedReviews} {EN.REVIEWS.REVIEWS}
      </Text>
    </View>
  );
};

export default UserRating;

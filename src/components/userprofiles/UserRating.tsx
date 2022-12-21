import { Text, View } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '@assets/colors';
import { EN } from '@assets/strings';
import { ReviewType, ReviewsType } from '@components/userprofiles/reviews/Reviews';
import { fixedRatingAverage } from '@utils';
import { userRatingStyles } from './styles';

interface UserRatingProps {
  reviews: ReviewsType;
}

const UserRating = ({ reviews }: UserRatingProps) => {
  const combinedReviews: ReviewType[] = reviews.fromClients.concat(reviews.fromTranslators);

  const rating = fixedRatingAverage(combinedReviews);
  const numberOfReviews = (array: ReviewType[]) => array.length;

  const combinedNumberOfReviews =
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
        {combinedNumberOfReviews} {EN.REVIEWS.REVIEWS}
      </Text>
    </View>
  );
};

export default UserRating;

import { Text, View } from 'native-base';
import Colors from '@assets/colors';
import { ReviewType } from './Reviews';

// TODO: Add proper type
// TODO: Add Luxon to format date
const Review = ({ name, reviewDate }: any) => (
  <View>
    <Text bold>{name}</Text>
    <Text bold fontSize="xs" color={Colors.grey}>
      {reviewDate.toDateString()}
    </Text>
  </View>
);

export default Review;

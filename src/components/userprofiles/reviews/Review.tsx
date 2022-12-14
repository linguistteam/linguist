import { Text, View } from 'native-base';
import { ReviewType } from './Reviews';

// TODO: Add proper type
const Review = ({ name }: any) => (
  <View>
    <Text bold>{name}</Text>
  </View>
);

export default Review;

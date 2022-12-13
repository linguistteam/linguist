import { Heading, View } from 'native-base';
import { reviewsStyles } from '../styles';

const Reviews = () => (
  <View>
    <Heading bold size="md" style={reviewsStyles.heading}>
      Reviews
    </Heading>
  </View>
);

export default Reviews;

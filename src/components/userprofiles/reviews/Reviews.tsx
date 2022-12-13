import { Heading, View } from 'native-base';
import { reviewsStyles } from '../styles';
import Switcher from './Switcher';

const Reviews = () => (
  <View>
    <Heading bold size="md" style={reviewsStyles.heading}>
      Reviews
    </Heading>

    <Switcher />
  </View>
);

export default Reviews;

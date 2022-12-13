import { Heading, View } from 'native-base';
import { reviewsStyles } from '../styles';
import Switcher from './Switcher';

interface ReviewsProps {
  isTranslatorProfile: boolean;
}

const Reviews = ({ isTranslatorProfile }: ReviewsProps) => (
  <View>
    <Heading bold size="md" style={reviewsStyles.heading}>
      Reviews
    </Heading>

    <Switcher isTranslatorProfile={isTranslatorProfile} />
  </View>
);

export default Reviews;

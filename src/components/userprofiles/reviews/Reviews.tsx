import { Heading, View } from 'native-base';
import { Moment } from 'moment';
import { EN } from '@assets/strings';
import { reviewsStyles } from './styles';
import Switcher from './Switcher';

interface ReviewsProps {
  isTranslatorProfile: boolean;
  reviews: ReviewsType;
}

export interface ReviewType {
  userId: string;
  profileImage: string;
  name: string;
  reviewDate: Moment;
  rating: number;
  review: string;
  isTopLinguist?: boolean;
}

export interface ReviewsType {
  fromClients: ReviewType[];
  fromTranslators: ReviewType[];
}

const Reviews = ({ isTranslatorProfile, reviews }: ReviewsProps) => (
  <View>
    <Heading bold size="md" style={reviewsStyles.heading}>
      {EN.REVIEWS.HEADING}
    </Heading>

    <Switcher isTranslatorProfile={isTranslatorProfile} reviews={reviews} />
  </View>
);

export default Reviews;

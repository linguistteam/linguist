import { Heading, View } from 'native-base';
import { EN } from '@assets/strings';
import { reviewsStyles } from './styles';
import Switcher from './Switcher';

interface ReviewsProps {
  isTranslatorProfile: boolean;
}

export interface ReviewsArrayType {
  userId: string;
  profileImage: string;
  name: string;
  reviewDate: Date;
  rating: number;
  review: string;
  isTopLinguist?: boolean;
  isTranslator?: boolean;
}

const dummyDateTomorrow = new Date(Date.now() + 86400000);
const dummyDateToday = new Date();
const dummyDateYesterday = new Date(Date.now() - 86400000);
const dummyDateTwoDaysAgo = new Date(Date.now() - 172800000);
const dummyDateThreeDaysAgo = new Date(Date.now() - 172800000);

// TODO: User id should be generated from react-native-uuid
const reviews: ReviewsArrayType[] = [
  {
    userId: 'c5ca67d5-a754-465d-add9-7508cfe0d128',
    profileImage: 'Test 3',
    name: 'Jane Crow',
    reviewDate: dummyDateTwoDaysAgo,
    rating: 5.0,
    review: 'Lorem ipsum',
    isTopLinguist: false,
    isTranslator: false,
  },
  {
    userId: '3bc88969-df04-44d7-965a-149590e4bf91',
    profileImage: 'Test 2',
    name: 'Shane Doe',
    reviewDate: dummyDateYesterday,
    rating: 4.8,
    review: 'Lorem ipsum',
    isTopLinguist: false,
    isTranslator: false,
  },
  {
    userId: '996c19c0-5aa0-4ad6-b0a2-c33de9034ebc',
    profileImage: 'Test 1',
    name: 'Jane Moe',
    reviewDate: dummyDateToday,
    rating: 4.7,
    review: 'Lorem ipsum',
    isTopLinguist: true,
    isTranslator: true,
  },
  {
    userId: '3bc88969-df04-44d7-965a-149590e4bf90',
    profileImage: 'Test 2',
    name: 'Rain Doe',
    reviewDate: dummyDateThreeDaysAgo,
    rating: 4.9,
    review: 'Lorem ipsum',
    isTopLinguist: false,
    isTranslator: true,
  },
  {
    userId: '996c19c0-5aa0-4ad6-b0a2-c33de9034ebt',
    profileImage: 'Test 1',
    name: 'Jane Doe',
    reviewDate: dummyDateTomorrow,
    rating: 4.5,
    review: 'Lorem ipsum',
    isTopLinguist: false,
    isTranslator: false,
  },
];

const Reviews = ({ isTranslatorProfile }: ReviewsProps) => (
  <View>
    <Heading bold size="md" style={reviewsStyles.heading}>
      {EN.REVIEWS.HEADING}
    </Heading>

    <Switcher isTranslatorProfile={isTranslatorProfile} reviews={reviews} />
  </View>
);

export default Reviews;

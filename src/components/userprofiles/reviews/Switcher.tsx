import { Text, View } from 'native-base';

type SwitcherProps = {
  userId: string;
  profileImage: string;
  name: string;
  reviewDate: Date;
  rating: number;
  review: string;
  isTopLinguist?: boolean;
  isTranslator?: boolean;
};

const dummyDateToday = new Date();
const dummyDateYesterday = new Date(Date.now() - 86400000);
const dummyDateTwoDaysAgo = new Date(Date.now() - 172800000);

// TODO: User id should be generated from react-native-uuid
const reviews: SwitcherProps[] = [
  {
    userId: '996c19c0-5aa0-4ad6-b0a2-c33de9034ebc',
    profileImage: 'Test 1',
    name: 'Jane Doe',
    reviewDate: dummyDateToday,
    rating: 4.5,
    review: 'Lorem ipsum',
    isTopLinguist: true,
    isTranslator: true,
  },
  {
    userId: '3bc88969-df04-44d7-965a-149590e4bf90',
    profileImage: 'Test 2',
    name: 'Shane Doe',
    reviewDate: dummyDateYesterday,
    rating: 4.8,
    review: 'Lorem ipsum',
    isTopLinguist: false,
    isTranslator: true,
  },
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
];

// const reviewsFromClients = reviews.filter((review) => !review.isTranslator);
const reviewsFromClients: SwitcherProps[] = [];
const reviewsFromTranslators = reviews.filter((review) => review.isTranslator);

const Switcher = () => (
  <View>
    <Text bold fontSize="sm">
      From clients
    </Text>

    {!reviewsFromClients && <Text>No reviews yet.</Text>}

    {reviewsFromClients.map((review) => (
      <Text key={review.userId}>{review.name}</Text>
    ))}
  </View>
);

export default Switcher;

import { Heading, View } from 'native-base';
import moment, { Moment } from 'moment';
import { EN } from '@assets/strings';
import { reviewsStyles } from './styles';
import Switcher from './Switcher';

interface ReviewsProps {
  isTranslatorProfile: boolean;
}

export interface ReviewType {
  userId: string;
  profileImage: string;
  name: string;
  reviewDate: Moment;
  rating: number;
  review: string;
  isTopLinguist?: boolean;
  isTranslator?: boolean;
}

const dummyDateNow = moment();
const dummyDateTomorrow = moment(dummyDateNow).add(1, 'days');
const dummyDateOneHourAgo = moment(dummyDateNow).subtract(1, 'hours');
const dummyDateYesterday = moment(dummyDateNow).subtract(1, 'days');
const dummyDateOneWeeksAgo = moment(dummyDateNow).subtract(7, 'days');

// TODO: User id should be generated from react-native-uuid
// NOTE: Stars can only be full or half
const reviews: ReviewType[] = [
  {
    userId: 'c5ca67d5-a754-465d-add9-7508cfe0d128',
    profileImage: 'Test 3',
    name: 'Jane Crow',
    reviewDate: dummyDateOneHourAgo,
    rating: 5.0,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas integer eget aliquet nibh praesent. Dictum sit amet justo donec enim diam vulputate ut. Et ligula ullamcorper malesuada proin libero nunc consequat. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Sit amet dictum sit amet justo. Libero id faucibus nisl tincidunt eget nullam. Nibh praesent tristique magna sit amet purus gravida quis. Ultricies integer quis auctor elit sed vulputate mi sit. Suspendisse interdum consectetur libero id faucibus nisl tincidunt. Aliquet eget sit amet tellus cras adipiscing enim. Dictum at tempor commodo ullamcorper a lacus. Sapien faucibus et molestie ac feugiat sed. Vel pretium lectus quam id.',
    isTopLinguist: false,
    isTranslator: false,
  },
  {
    userId: '3bc88969-df04-44d7-965a-149590e4bf91',
    profileImage: 'Test 2',
    name: 'Shane Doe',
    reviewDate: dummyDateYesterday,
    rating: 4.5,
    review:
      'Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Aliquam faucibus purus in massa tempor nec feugiat. Tortor consequat id porta nibh venenatis cras sed. Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Id ornare arcu odio ut sem nulla pharetra diam sit.',
    isTopLinguist: false,
    isTranslator: false,
  },
  {
    userId: '996c19c0-5aa0-4ad6-b0a2-c33de9034ebc',
    profileImage: 'Test 1',
    name: 'Jane Moe',
    reviewDate: dummyDateNow,
    rating: 4.7,
    review:
      'Mi sit amet mauris commodo. Dignissim diam quis enim lobortis scelerisque fermentum dui. Arcu risus quis varius quam quisque id diam. Lectus urna duis convallis convallis.',
    isTopLinguist: true,
    isTranslator: true,
  },
  {
    userId: '996c19c0-5aa0-4ad6-b0a2-c33de9034ebc',
    profileImage: 'Test 1',
    name: 'Jane Stow',
    reviewDate: dummyDateNow,
    rating: 4,
    review:
      'Mi sit amet mauris commodo. Dignissim diam quis enim lobortis scelerisque fermentum dui. Arcu risus quis varius quam quisque id diam. Lectus urna duis convallis convallis.',
    isTopLinguist: false,
    isTranslator: false,
  },
  {
    userId: '3bc88969-df04-44d7-965a-149590e4bf90',
    profileImage: 'Test 2',
    name: 'Rain Doe',
    reviewDate: dummyDateOneWeeksAgo,
    rating: 4.5,
    review:
      'Etiam dignissim diam quis enim lobortis scelerisque fermentum. Enim blandit volutpat maecenas volutpat blandit. Gravida cum sociis natoque penatibus et magnis dis parturient montes. Sit amet mauris commodo quis imperdiet. Pulvinar elementum integer enim neque volutpat ac. Elementum integer enim neque volutpat. Cursus sit amet dictum sit amet justo donec enim. Cras adipiscing enim eu turpis egestas pretium. Sit amet aliquam id diam maecenas ultricies. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Ultrices sagittis orci a scelerisque. Est lorem ipsum dolor sit amet. Ultrices neque ornare aenean euismod elementum nisi quis. Facilisis leo vel fringilla est ullamcorper eget nulla. Interdum velit euismod in pellentesque massa placerat. Sem nulla pharetra diam sit amet nisl suscipit adipiscing.',
    isTopLinguist: false,
    isTranslator: true,
  },
  {
    userId: '996c19c0-5aa0-4ad6-b0a2-c33de9034ebt',
    profileImage: 'Test 1',
    name: 'Jane Doe',
    reviewDate: dummyDateTomorrow,
    rating: 5,
    review: 'Nec sagittis aliquam malesuada bibendum arcu vitae elementum.',
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

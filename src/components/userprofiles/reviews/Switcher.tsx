import { useState } from 'react';
import { Flex, Pressable, Text, View } from 'native-base';
import Colors from '@assets/colors';
import { EN } from '@assets/strings';
import { switcherHeaderStyles, switcherStyles } from './styles';

interface SwitcherProps {
  isTranslatorProfile: boolean;
}

interface ReviewsArrayType {
  userId: string;
  profileImage: string;
  name: string;
  reviewDate: Date;
  rating: number;
  review: string;
  isTopLinguist?: boolean;
  isTranslator?: boolean;
}

const dummyDateToday = new Date();
const dummyDateYesterday = new Date(Date.now() - 86400000);
const dummyDateTwoDaysAgo = new Date(Date.now() - 172800000);

// TODO: User id should be generated from react-native-uuid
const reviews: ReviewsArrayType[] = [
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

const numberOfReviews = (array: ReviewsArrayType[]) => array.length;

const reviewsFromClients = reviews.filter((review) => !review.isTranslator);
// const reviewsFromTranslators: SwitcherProps[] = [];
const reviewsFromTranslators: ReviewsArrayType[] = reviews.filter((review) => review.isTranslator);

const Switcher = ({ isTranslatorProfile }: SwitcherProps) => {
  // const [clientHeadingActive, setClientHeadingActive] = useState(true);
  // const [translatorHeadingActive, setTranslatorHeadingActive] = useState(false);
  const [activeHeading, setActiveHeading] = useState({
    clientHeading: true,
    translatorHeading: false,
  });

  return (
    <View>
      {/* TODO: If profile is client, should only show translator reviews since
        they are not a translator; HIDE HEADINGS/SWITCHER FUNCTIONALITY */}
      {/* TODO: Change text color to black and underline conditionally */}
      {isTranslatorProfile && (
        <Flex direction="row" justifyContent="space-between">
          <Pressable
            onPress={() => setActiveHeading({ clientHeading: true, translatorHeading: false })}
          >
            <View style={switcherHeaderStyles(activeHeading.clientHeading).headingContainer}>
              <Text
                bold
                fontSize="sm"
                style={switcherHeaderStyles(activeHeading.clientHeading).heading}
              >
                {EN.REVIEWS.FROM_CLIENTS} ({numberOfReviews(reviewsFromClients)})
              </Text>
            </View>
          </Pressable>

          <Pressable
            onPress={() => setActiveHeading({ clientHeading: false, translatorHeading: true })}
          >
            <View style={switcherHeaderStyles(activeHeading.translatorHeading).headingContainer}>
              <Text
                bold
                fontSize="sm"
                style={switcherHeaderStyles(activeHeading.translatorHeading).heading}
              >
                {EN.REVIEWS.FROM_TRANSLATORS} ({numberOfReviews(reviewsFromTranslators)})
              </Text>
            </View>
          </Pressable>
        </Flex>
      )}

      {/* TODO: Can these be simplified into one function? */}
      {/* CLIENT REVIEWS */}
      {activeHeading.clientHeading && (
        <View style={switcherStyles.reviewsContainer}>
          {!numberOfReviews(reviewsFromClients) && (
            <Text bold color={Colors.grey}>
              {EN.REVIEWS.NO_REVIEWS_YET}
            </Text>
          )}

          {reviewsFromClients.map((review) => (
            <Text bold key={review.userId}>
              {review.name}
            </Text>
          ))}
        </View>
      )}

      {/* TRANSALTOR REVIEWS */}
      {activeHeading.translatorHeading && (
        <View style={switcherStyles.reviewsContainer}>
          {!numberOfReviews(reviewsFromTranslators) && (
            <Text bold color={Colors.grey}>
              {EN.REVIEWS.NO_REVIEWS_YET}
            </Text>
          )}

          {reviewsFromTranslators.map((review) => (
            <Text bold key={review.userId}>
              {review.name}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default Switcher;

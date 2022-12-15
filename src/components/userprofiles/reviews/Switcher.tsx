import { useState } from 'react';
import { Flex, Pressable, Text, View } from 'native-base';
import Colors from '@assets/colors';
import { EN } from '@assets/strings';
import { switcherHeaderStyles, switcherStyles } from './styles';
import Review from './Review';
import { ReviewType } from './Reviews';

interface SwitcherProps {
  isTranslatorProfile: boolean;
  reviews: ReviewType[];
}

const Switcher = ({ isTranslatorProfile, reviews }: SwitcherProps) => {
  const [activeHeading, setActiveHeading] = useState({
    clientHeading: true,
    translatorHeading: false,
  });

  const numberOfReviews = (array: ReviewType[]) => array.length;

  const sortedReviews: ReviewType[] = reviews.sort(
    (a: ReviewType, b: ReviewType) => b.reviewDate.valueOf() - a.reviewDate.valueOf(),
  );

  const reviewsFromClients: ReviewType[] = sortedReviews.filter((review) => !review.isTranslator);
  const reviewsFromTranslators: ReviewType[] = sortedReviews.filter(
    (review) => review.isTranslator,
  );

  return (
    <View>
      {/* TODO: If profile is client, should only show translator reviews since
        they are not a translator; HIDE HEADINGS/SWITCHER FUNCTIONALITY */}
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

      {activeHeading.clientHeading && (
        <View style={switcherStyles.reviewsContainer}>
          {!numberOfReviews(reviewsFromClients) && (
            <Text bold color={Colors.grey}>
              {EN.REVIEWS.NO_REVIEWS_YET}
            </Text>
          )}

          {reviewsFromClients.map((review) => (
            <Review
              key={review.userId}
              name={review.name}
              reviewDate={review.reviewDate}
              review={review.review}
            />
          ))}
        </View>
      )}

      {activeHeading.translatorHeading && (
        <View style={switcherStyles.reviewsContainer}>
          {!numberOfReviews(reviewsFromTranslators) && (
            <Text bold color={Colors.grey}>
              {EN.REVIEWS.NO_REVIEWS_YET}
            </Text>
          )}

          {reviewsFromTranslators.map((review) => (
            <Review
              key={review.userId}
              name={review.name}
              reviewDate={review.reviewDate}
              review={review.review}
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default Switcher;

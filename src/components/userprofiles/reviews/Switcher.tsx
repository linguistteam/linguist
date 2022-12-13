import { useState } from 'react';
import { Flex, Pressable, Text, View } from 'native-base';
import Colors from '@assets/colors';
import { EN } from '@assets/strings';
import { switcherHeaderStyles, switcherStyles } from './styles';
import { ReviewsArrayType } from './Reviews';

interface SwitcherProps {
  isTranslatorProfile: boolean;
  reviews: ReviewsArrayType[];
}

const Switcher = ({ isTranslatorProfile, reviews }: SwitcherProps) => {
  const [activeHeading, setActiveHeading] = useState({
    clientHeading: true,
    translatorHeading: false,
  });

  const numberOfReviews = (array: ReviewsArrayType[]) => array.length;

  const sortedReviews = reviews.sort((a, b) => new Date(b.reviewDate) - new Date(a.reviewDate));

  const reviewsFromClients: ReviewsArrayType[] = sortedReviews.filter(
    (review) => !review.isTranslator,
  );
  const reviewsFromTranslators: ReviewsArrayType[] = sortedReviews.filter(
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
            <Text bold key={review.userId}>
              {review.name}
            </Text>
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

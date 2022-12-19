import { useState } from 'react';
import { Flex, Pressable, Text, View } from 'native-base';
import Colors from '@assets/colors';
import { EN } from '@assets/strings';
import { SeeMoreButton } from '@common';
import { switcherHeaderStyles, switcherStyles } from './styles';
import Review from './Review';
import { ReviewType, ReviewsType } from './Reviews';

interface SwitcherProps {
  isTranslatorProfile: boolean;
  reviews: ReviewsType;
}

const Switcher = ({ isTranslatorProfile, reviews }: SwitcherProps) => {
  const [activeHeading, setActiveHeading] = useState({
    clientHeading: true,
    translatorHeading: false,
  });

  const numberOfReviews = (array: ReviewType[]) => array.length;

  const sortedReviews = (data: ReviewType[]) =>
    data.sort((a: ReviewType, b: ReviewType) => b.reviewDate.valueOf() - a.reviewDate.valueOf());

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
                {EN.REVIEWS.FROM_CLIENTS} ({numberOfReviews(reviews.fromClients)})
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
                {EN.REVIEWS.FROM_TRANSLATORS} ({numberOfReviews(reviews.fromTranslators)})
              </Text>
            </View>
          </Pressable>
        </Flex>
      )}

      {activeHeading.clientHeading && (
        <View style={switcherStyles.reviewsContainer}>
          {!numberOfReviews(reviews.fromClients) && (
            <Text bold color={Colors.grey}>
              {EN.REVIEWS.NO_REVIEWS_YET}
            </Text>
          )}

          <View style={switcherStyles.reviewsContent}>
            {sortedReviews(reviews.fromClients).map((review: ReviewType) => (
              <Review
                isTopLinguist={review.isTopLinguist}
                key={review.userId}
                name={review.name}
                profileImage={review.profileImage}
                rating={review.rating}
                review={review.review}
                reviewDate={review.reviewDate}
              />
            ))}
          </View>

          {/* TODO: Switch number to 10 when done testing */}
          {numberOfReviews(reviews.fromClients) > 3 && (
            <SeeMoreButton
              content={EN.REVIEWS.SEE_MORE_REVIEWS}
              isLoading={true}
              loadingText={EN.REVIEWS.LOADING_REVIEWS}
            />
          )}
        </View>
      )}

      {activeHeading.translatorHeading && (
        <View style={switcherStyles.reviewsContainer}>
          {!numberOfReviews(reviews.fromTranslators) && (
            <Text bold color={Colors.grey}>
              {EN.REVIEWS.NO_REVIEWS_YET}
            </Text>
          )}

          <View style={switcherStyles.reviewsContent}>
            {sortedReviews(reviews.fromTranslators).map((review: ReviewType) => (
              <Review
                isTopLinguist={review.isTopLinguist}
                key={review.userId}
                name={review.name}
                profileImage={review.profileImage}
                rating={review.rating}
                review={review.review}
                reviewDate={review.reviewDate}
              />
            ))}
          </View>

          {/* TODO: Switch number to 10 when done testing */}
          {numberOfReviews(reviews.fromClients) > 1 && (
            <SeeMoreButton
              content={EN.REVIEWS.SEE_MORE_REVIEWS}
              isLoading={false}
              loadingText={EN.REVIEWS.LOADING_REVIEWS}
            />
          )}
        </View>
      )}
    </View>
  );
};

export default Switcher;

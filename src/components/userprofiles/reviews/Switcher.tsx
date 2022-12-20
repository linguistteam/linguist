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
  const [reviewsLoading, setReviewsLoading] = useState(false);
  const [currentReviewsSection, setCurrentReviewsSection] = useState(1);

  const dummyLoadReviews = () => {
    setReviewsLoading(true);

    setTimeout(() => {
      setReviewsLoading(false);
      setCurrentReviewsSection(currentReviewsSection + 1);
    }, 1000);
  };

  const numberOfReviews = (array: ReviewType[]) => array.length;

  const sortedReviews = (data: ReviewType[]) =>
    data.sort((a: ReviewType, b: ReviewType) => b.reviewDate.valueOf() - a.reviewDate.valueOf());

  const numberPerPage = 10;
  let currentEnd = 10;

  const pagination = (data: ReviewType[], currSection: number) => {
    const trimStart = (currSection - 1) * numberPerPage;
    const trimEnd = trimStart + numberPerPage;
    currentEnd = trimEnd;

    return sortedReviews(data).slice(0, trimEnd);
  };

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
            {pagination(reviews.fromClients, currentReviewsSection).map((review: ReviewType) => (
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

          {currentEnd < numberOfReviews(reviews.fromClients) && (
            <SeeMoreButton
              content={EN.REVIEWS.SEE_MORE_REVIEWS}
              isLoading={reviewsLoading}
              loadingText={EN.REVIEWS.LOADING_REVIEWS}
              onPress={() => dummyLoadReviews()}
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

          {currentEnd < numberOfReviews(reviews.fromTranslators) && (
            <SeeMoreButton
              content={EN.REVIEWS.SEE_MORE_REVIEWS}
              isLoading={reviewsLoading}
              loadingText={EN.REVIEWS.LOADING_REVIEWS}
              onPress={() => dummyLoadReviews()}
            />
          )}
        </View>
      )}
    </View>
  );
};

export default Switcher;

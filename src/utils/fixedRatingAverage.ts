import { ReviewType } from '@components/userprofiles/reviews/Reviews';

/* Get average of all the ratings */
/* If no ratings, display 5.0 */
const ratingAverage = (array: ReviewType[]) =>
  !array.length
    ? 5.0
    : array.reduce((prevValue, currentValue) => prevValue + currentValue.rating, 0) / array.length;

/* Convert average ratings to fixed amount */
const fixedRatingAverage = (array: ReviewType[]) => ratingAverage(array).toFixed(1);

export default fixedRatingAverage;

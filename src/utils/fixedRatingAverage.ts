import { ReviewType } from '@components/userprofiles/reviews/Reviews';

/* Get average of all the ratings */
const ratingAverage = (array: ReviewType[]) =>
  array.reduce((prevValue, currentValue) => prevValue + currentValue.rating, 0) / array.length;

/* Convert average ratings to fixed amount */
const fixedRatingAverage = (array: ReviewType[]) => ratingAverage(array).toFixed(1);

export default fixedRatingAverage;

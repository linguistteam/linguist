import { StyleSheet } from 'react-native';

export const profileImageStyles = StyleSheet.create({
  profileImage: {
    width: 'auto',
    height: 400,
    zIndex: 0,
  },
});

// TODO: Make all items center aligned
export const userRatingStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  rating: {
    marginLeft: 2,
  },
  divider: {
    marginHorizontal: 4,
  },
  reviews: {
    textDecorationLine: 'underline',
  },
});

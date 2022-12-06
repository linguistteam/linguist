import { StyleSheet } from 'react-native';

export const languagesStyles = StyleSheet.create({
  heading: {
    marginTop: 20,
  },
  countryFlagRow: {
    marginTop: 10,
  },
  countryFlag: {
    height: 20,
    width: 20,
    borderRadius: 50,
    marginRight: 20,
  },
});

export const profileImageStyles = StyleSheet.create({
  profileImage: {
    width: 'auto',
    height: 400,
    zIndex: 0,
  },
});

export const topLinguistBadgeStyles = StyleSheet.create({
  icon: {
    transform: [{ rotateY: '180deg' }],
    marginRight: 3,
  },
});

export const userLocationStyles = StyleSheet.create({
  container: {
    marginTop: -5,
    marginBottom: 10,
  },
});

export const userRatingStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  rating: {
    marginLeft: 2,
  },
  divider: {
    marginHorizontal: 4,
  },
});

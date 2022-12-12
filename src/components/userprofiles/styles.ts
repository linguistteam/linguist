import { StyleSheet } from 'react-native';

export const languagesStyles = StyleSheet.create({
  heading: {
    marginTop: 20,
  },
  countryFlagRow: {
    marginTop: 10,
    flexWrap: 'wrap',
  },
  countryFlagContainer: {
    height: 35,
    width: 35,
    borderRadius: 5,
    borderWidth: 3,
    marginRight: 15,
    marginTop: 5,
  },
  countryFlag: {
    height: 30,
    width: 30,
    borderRadius: 5,
    marginTop: -0.8,
    marginLeft: -0.8,
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

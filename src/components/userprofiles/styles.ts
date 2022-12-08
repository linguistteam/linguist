import { StyleSheet } from 'react-native';

export const languagesStyles = StyleSheet.create({
  heading: {
    marginTop: 20,
  },
  countryFlagRow: {
    marginTop: 10,
  },
  countryFlagContainer: {
    height: 45,
    width: 45,
    borderRadius: 50,
    borderWidth: 3,
    marginRight: 20,
  },
  countryFlag: {
    height: 30,
    width: 30,
    borderRadius: 50,
    marginTop: 4,
    marginLeft: 4,
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

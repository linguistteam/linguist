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
    height: 28,
    width: 28,
    borderRadius: 5,
    borderWidth: 2,
    marginRight: 10,
    marginTop: 5,
  },
  countryFlag: {
    height: 25,
    width: 25,
    borderRadius: 4,
    marginTop: -0.5,
    marginLeft: -0.5,
  },
});

export const profileImageStyles = StyleSheet.create({
  profileImage: {
    alignSelf: 'center',
    marginVertical: 20,
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

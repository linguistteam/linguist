import { StyleSheet } from 'react-native';
import Colors from '@assets/colors';

export const reviewsStyles = StyleSheet.create({
    heading: {
        marginTop: 20,
        marginBottom: 10,
    },
});

export const reviewSwitcherHeaderStyles = (isHeadingActive: boolean) =>
    StyleSheet.create({
        headingContainer: {
            borderBottomWidth: isHeadingActive ? 1 : 0,
        },
        heading: {
            color: isHeadingActive ? Colors.black : Colors.grey,
        },
    });

export const reviewsSwitcherStyles = StyleSheet.create({
    reviewsContainer: {
        marginTop: 10,
    },
});

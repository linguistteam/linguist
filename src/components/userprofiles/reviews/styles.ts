import { StyleSheet } from 'react-native';
import Colors from '@assets/colors';

export const reviewStyles = StyleSheet.create({
    reviewContainer: {
        marginVertical: 5,
    },
    reviewText: {
        marginTop: 10,
    },
    avatarContainer: {
        width: '20%',
    },
    reviewContentContainer: {
        width: '80%',
    },
});

export const reviewsStyles = StyleSheet.create({
    heading: {
        marginTop: 20,
        marginBottom: 10,
    },
});

export const switcherHeaderStyles = (isHeadingActive: boolean) =>
    StyleSheet.create({
        headingContainer: {
            borderBottomWidth: isHeadingActive ? 1 : 0,
        },
        heading: {
            color: isHeadingActive ? Colors.black : Colors.grey,
        },
    });

export const switcherStyles = StyleSheet.create({
    reviewsContainer: {
        marginTop: 10,
    },
});

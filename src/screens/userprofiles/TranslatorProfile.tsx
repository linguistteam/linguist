import { Image, View } from 'react-native';
import { Text } from '@rneui/base';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './styles';

// TODO: Fix eslint indent issues
const TranslatorProfile = () => {
    const insets = useSafeAreaInsets();

    // TODO: Image should be uploaded by user and pass in from DB
    const image = { uri: 'https://via.placeholder.com/400x400' };

    return (
        <View style={{ paddingTop: insets.top }}>
            <View style={styles.container}>
                <Image source={image} style={styles.profileImage} />
            </View>
        </View>
    );
};

export default TranslatorProfile;

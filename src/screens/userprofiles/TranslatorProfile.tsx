import { Image, View } from 'react-native';
import { Text } from '@rneui/base';
import { styles } from './styles';

// TODO: Fix eslint indent issues
const TranslatorProfile = () => {
    // TODO: Image should be uploaded by user and pass in from DB
    const image = { uri: 'https://via.placeholder.com/400x400' };

    return (
        <View style={styles.container}>
            <Image source={image} resizeMode="cover" style={styles.profileImage} />
            {/* <Text h1>Hello</Text> */}
        </View>
    );
};

export default TranslatorProfile;

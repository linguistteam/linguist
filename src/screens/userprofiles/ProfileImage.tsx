import { Image, View } from 'react-native';
import { Skeleton } from '@rneui/base';
import { styles } from './styles';

type ProfileImageProps = {
    image: string;
};

const ProfileImage = ({ image }: ProfileImageProps) => {
    // TODO: Should be set based on content loading from DB
    const imageIsLoading = true;

    return (
        <View>
            {imageIsLoading ? (
                <Skeleton animation="pulse" height={400} />
            ) : (
                <View></View>
                // <Image source={require(image)} style={styles.profileImage} />
            )}
        </View>
    );
};

export default ProfileImage;
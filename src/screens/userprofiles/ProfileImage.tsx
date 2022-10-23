import { Image, View } from 'react-native';
import { Skeleton } from '@rneui/base';
import { styles } from './styles';

type ProfileImageProps = {
  imageBlur: boolean;
};

const ProfileImage = ({ imageBlur }: ProfileImageProps) => {
  // TODO: All values here should be editable by user and passed in from DB
  const image = '../../assets/images/stock/profile-user.jpeg';

  // TODO: Should be set based on content loading from DB
  const imageIsLoading = false;

  return (
    <View>
      {imageIsLoading ? (
        <Skeleton animation="pulse" height={400} />
      ) : (
        <Image
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          source={require(image)}
          blurRadius={imageBlur ? 10 : 0}
          style={styles.profileImage}
        />
      )}
    </View>
  );
};

export default ProfileImage;

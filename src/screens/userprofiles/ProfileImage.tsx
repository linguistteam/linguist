import { Image, View } from 'react-native';
import { Skeleton } from '@rneui/base';
import { styles } from './styles';

const ProfileImage = () => {
  // TODO: All values here should be editable by user and passed in from DB
  const image = '../../assets/images/stock/profile-user.jpeg';

  // TODO: Should be set based on content loading from DB
  const imageIsLoading = false;

  return (
    <View>
      {imageIsLoading ? (
        <Skeleton animation="pulse" height={400} />
      ) : (
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        <Image source={require(image)} style={styles.profileImage} />
      )}
    </View>
  );
};

export default ProfileImage;

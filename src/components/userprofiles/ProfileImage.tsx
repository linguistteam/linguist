import { Image, Skeleton, View } from 'native-base';
import { profileImageStyles } from './styles';

type ProfileImageProps = {
  imageBlur: boolean;
};

const ProfileImage = ({ imageBlur }: ProfileImageProps) => {
  // TODO: All values here should be editable by user and passed in from DB
  const image = '../../assets/images/stock/profile-user.jpeg';
  const imageAlt = 'John Doe';

  // TODO: Should be set based on content loading from DB
  const imageIsLoading = false;

  return (
    <View>
      {imageIsLoading ? (
        <Skeleton h="400" />
      ) : (
        <Image
          alt={imageAlt}
          blurRadius={imageBlur ? 10 : 0}
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          source={require(image)}
          style={profileImageStyles.profileImage}
        />
      )}
    </View>
  );
};

export default ProfileImage;

import { Image, Skeleton, View } from 'native-base';
import { profileImageStyles } from './styles';

interface ProfileImageProps {
  imageBlur: boolean;
  name: string;
  profileImage: string;
}

const ProfileImage = ({ imageBlur, name, profileImage }: ProfileImageProps) => {
  // TODO: Should be set based on content loading from DB
  const imageIsLoading = false;

  return (
    <View>
      {imageIsLoading ? (
        <Skeleton h="400" />
      ) : (
        <Image
          alt={name}
          blurRadius={imageBlur ? 10 : 0}
          source={{ uri: profileImage }}
          style={profileImageStyles.profileImage}
        />
      )}
    </View>
  );
};

export default ProfileImage;

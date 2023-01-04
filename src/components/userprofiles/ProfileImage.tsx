import { Avatar, Skeleton, View } from 'native-base';
import { extractInitials } from '@utils';
import { profileImageStyles } from './styles';

interface ProfileImageProps {
  name: string;
  profileImage: string;
}

const ProfileImage = ({ name, profileImage }: ProfileImageProps) => {
  // TODO: Should be set based on content loading from DB
  const imageIsLoading = false;

  return (
    <View>
      {imageIsLoading ? (
        <Skeleton
          borderWidth={1}
          borderColor="coolGray.200"
          endColor="warmGray.50"
          size="32"
          rounded="full"
          marginY={15}
          alignSelf="center"
        />
      ) : (
        <Avatar source={{ uri: profileImage }} size="2xl" style={profileImageStyles.profileImage}>
          {extractInitials(name)}
          <Avatar.Badge bg="green.500" />
        </Avatar>
      )}
    </View>
  );
};

export default ProfileImage;

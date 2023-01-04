import { Avatar, Skeleton, View } from 'native-base';
import { profileImageStyles } from './styles';

interface ProfileImageProps {
  profileImage: string;
}

const ProfileImage = ({ profileImage }: ProfileImageProps) => {
  // TODO: Should be set based on content loading from DB
  // TODO: Check to make sure skeleton still looks okay
  const imageIsLoading = false;

  return (
    <View>
      {imageIsLoading ? (
        <Skeleton h="400" />
      ) : (
        <Avatar source={{ uri: profileImage }} size="2xl" style={profileImageStyles.profileImage}>
          <Avatar.Badge bg="green.500" />
        </Avatar>
      )}
    </View>
  );
};

export default ProfileImage;

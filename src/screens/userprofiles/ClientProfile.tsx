import { Box, Flex, Heading, ScrollView, Text, View } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@common';
import { EN } from '@assets/strings';
import { ProfileImage, Reviews, UserLocation, UserRating } from '@components/userprofiles';
import { clientProfileReviews } from '@assets/dummyData/reviews';
import { profileStyles } from './styles';

// TODO: Figure out user data structure
// interface ClientProfileProps {
//   userId: string;
//   emailAddress: string;
//   firstName: string;
//   lastName: string;
//   profileImage: string;
//   languages: string[];
//   location: string;
//   bio: string;
//   currency: string;
//   isTranslator: boolean;
//   isTopLinguist: boolean;
// }

// TODO: Values here should be editable by user and passed in from DB
// TODO: When user location text length is longer than certain amount of chars, truncate the text
// TODO: Lanugage data coming from DB needs to match ISO 3166-1 alpha-2: https://www.iban.com/country-codes
const user = {
  userId: 'c5ca67d5-a754-465d-add9-7508cfe0d822',
  emailAddress: 'riley@gmail.com',
  name: 'Riley Hardy',
  profileImage:
    'https://images.unsplash.com/photo-1506691318991-c91e7df669b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=746&q=80',
  languages: ['en'],
  location: 'New York, New York, USA',
  bio: 'Curabitur ultricies at dui a rutrum. Donec sed velit enim. Morbi id augue feugiat, laoreet ex sed, imperdiet nisi. Vestibulum a neque non enim sagittis auctor eget vitae turpis. Vivamus lorem enim, consectetur quis tellus vel, pretium mattis massa. Aliquam erat volutpat. Etiam ut eleifend quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  currency: 'usd',
  isTranslator: false,
  isTopLinguist: false,
};

const { name, bio, location, profileImage, isTranslator } = user;

const ClientProfile = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <ProfileImage name={name} profileImage={profileImage} />

        <Box style={profileStyles.profileContent}>
          <Flex direction="column" alignItems="center">
            <Heading size="xl">{name}</Heading>

            <UserLocation location={location} />
          </Flex>

          <Flex direction="row" justifyContent={'center'}>
            <UserRating reviews={clientProfileReviews} />
          </Flex>

          <View style={profileStyles.hireButton}>
            <Button onPress={() => console.log('Pressed!')} text={EN.CLIENT_PROFILE.MESSAGE} />
          </View>

          <Text>{bio}</Text>

          <Reviews isTranslator={isTranslator} reviews={clientProfileReviews} />
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ClientProfile;

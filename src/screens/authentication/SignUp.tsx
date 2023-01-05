import { Heading, Input, Stack } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUp = () => (
  <SafeAreaView>
    <Stack space={4} w="75%" maxW="300px" mx="auto" alignItems="center">
      <Heading size="xl">Sign Up</Heading>
      <Input variant="outline" placeholder="Email" />
      <Input variant="outline" placeholder="Password" />
    </Stack>
  </SafeAreaView>
);

export default SignUp;

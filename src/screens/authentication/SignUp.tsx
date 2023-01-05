import { useState } from 'react';
import { Heading, Input, Stack } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView>
      <Stack space={4} w="75%" maxW="300px" mx="auto" alignItems="center">
        <Heading size="xl">Sign Up</Heading>
        <Input
          variant="outline"
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          variant="outline"
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
      </Stack>
    </SafeAreaView>
  );
};

export default SignUp;

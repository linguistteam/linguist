import { useState } from 'react';
import { Heading, Input, Stack } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@common';
import { handleLogin, handleSignUp } from '@utils';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // TODO: Add all text to strings file
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
        <Button onPress={() => handleLogin(email, password)} text="Log In" width="100%" />
        <Button onPress={() => handleSignUp(email, password)} text="Sign Up" width="100%" />
      </Stack>
    </SafeAreaView>
  );
};

export default SignUp;

import { useState } from 'react';
import { Heading, Input, Stack } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';
import { Button } from '@common';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        console.log('user', user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log('errorCode', errorCode);
        console.log('errorMessage', errorMessage);
      });
  };

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
        <Button onPress={() => handleSignUp()} text="Sign Up" />
      </Stack>
    </SafeAreaView>
  );
};

export default SignUp;

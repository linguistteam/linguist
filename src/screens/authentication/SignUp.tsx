import { useState } from 'react';
import { Heading, Input, Stack } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  AuthError,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../../firebaseConfig';
import { Button } from '@common';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('logged in user', user);
      })
      .catch((error: AuthError) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log('log in errorCode', errorCode);
        console.log('log in errorMessage', errorMessage);
      });
  };

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        console.log('sign up user', user);
      })
      .catch((error: AuthError) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log('sign up errorCode', errorCode);
        console.log('sign up errorMessage', errorMessage);
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
        <Button onPress={() => handleLogin()} text="Log In" width="100%" />
        <Button onPress={() => handleSignUp()} text="Sign Up" width="100%" />
      </Stack>
    </SafeAreaView>
  );
};

export default SignUp;

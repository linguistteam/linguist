import { useEffect, useState } from 'react';
import { Heading, Input, Stack } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@common';
import { handleLogin, handleSignUp } from '@utils';

import { auth } from '../../../firebaseConfig';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackNavigatorList } from '@screens/StackNavigator';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<StackNavigatorList>>();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate('TRANSLATOR_PROFILE');
      } else {
        console.log('user is logged out');
      }
    });
  }, []);

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

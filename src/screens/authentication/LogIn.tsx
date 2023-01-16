import { useState } from 'react';
import { Heading, Input } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@common';
import { handleLogin, useCheckLoggedInState } from '@utils';
import { useUserStore } from '@stores/user';
import { EN } from '@assets/strings';
import Colors from '@assets/colors';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setUser = useUserStore((state) => state.setUser);

  // TODO: Add loading spinner for when user is logging in
  useCheckLoggedInState();
  // TODO: Add all text to strings file
  return (
    <SafeAreaView>
      <Heading size="xl">{EN.COMMON.HELLO}</Heading>
      <Heading size="lg">{EN.LOG_IN.SUBHEADING}</Heading>
      <Input
        variant="outline"
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        type="text"
      />
      {/* TODO: Hide/show password */}
      <Input
        variant="outline"
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        type="password"
      />
      <Button
        bgColor={Colors.grey}
        onPress={() => handleLogin({ email, password, setUser })}
        pressedBgColor={Colors.lightenedGrey}
        text={EN.COMMON.CONTINUE_WITH_EMAIL}
        width="100%"
      />
    </SafeAreaView>
  );
};

export default LogIn;

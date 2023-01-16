import { useState } from 'react';
import { Heading, Input, Text, View } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button } from '@common';
import { handleLogin, useCheckLoggedInState } from '@utils';
import { useUserStore } from '@stores/user';
import { EN } from '@assets/strings';
import Colors from '@assets/colors';
import { StackNavigatorList } from '@screens/StackNavigator';

const LogIn = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackNavigatorList>>();
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setUser = useUserStore((state) => state.setUser);

  // TODO: Add loading spinner for when user is logging in
  useCheckLoggedInState();

  return (
    <SafeAreaView>
      <Heading size="xl">{EN.COMMON.HELLO}</Heading>
      <Heading size="lg">{EN.LOG_IN.SUBHEADING}</Heading>

      <Button
        bgColor={Colors.blueMagenta}
        onPress={() => console.log('Handle Google login')}
        pressedBgColor={Colors.lightenedBlueMagenta}
        text={EN.COMMON.CONTINUE_WITH_GOOGLE}
        width="100%"
      />
      {/* TODO: Hide/show password */}
      {showEmailForm && (
        <View>
          <Input
            variant="outline"
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            type="text"
          />
          <Input
            variant="outline"
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            type="password"
          />

          <Text
            color={Colors.blueMagenta}
            onPress={() => console.log('Handle user forgot password')}
          >
            {EN.LOG_IN.FORGOT_PASSWORD}
          </Text>
        </View>
      )}
      <Button
        bgColor={Colors.grey}
        onPress={() =>
          showEmailForm ? handleLogin({ email, password, setUser }) : setShowEmailForm(true)
        }
        pressedBgColor={Colors.lightenedGrey}
        text={EN.COMMON.CONTINUE_WITH_EMAIL}
        width="100%"
      />

      <Text color={Colors.blueMagenta} onPress={() => navigation.navigate('SIGN_UP')}>
        {EN.LOG_IN.CREATE_ACCOUNT}
      </Text>
    </SafeAreaView>
  );
};

export default LogIn;

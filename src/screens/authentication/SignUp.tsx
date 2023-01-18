import { useState } from 'react';
import { Button, Heading, Input, Pressable, Text, View } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { handleSignUp, useCheckLoggedInState } from '@utils';
import { useUserStore } from '@stores/user';
import { EN } from '@assets/strings';
import Colors from '@assets/colors';
import { StackNavigatorList } from '@screens/StackNavigator';

const SignUp = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackNavigatorList>>();
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setUser = useUserStore((state) => state.setUser);

  // TODO: Add loading spinner for when user is logging in
  useCheckLoggedInState();

  return (
    <SafeAreaView>
      <View justifyContent="center" height="100%">
        <View marginBottom={8}>
          <Heading size="xl" textAlign="center">
            {EN.COMMON.HELLO}
          </Heading>
          <Heading size="lg" textAlign="center">
            {EN.SIGN_UP.SUBHEADING}
          </Heading>
        </View>

        <View marginBottom={4}>
          <Button
            variant="magenta"
            leftIcon={<FontAwesomeIcon name="google" color={Colors.white} size={15} />}
            onPress={() => console.log('Handle Google login')}
          >
            {EN.COMMON.CONTINUE_WITH_GOOGLE}
          </Button>
        </View>
        {showEmailForm && (
          <View marginBottom={4}>
            <Input
              variant="outline"
              placeholder={EN.COMMON.EMAIL_ADDRESS}
              value={email}
              onChangeText={(text) => setEmail(text)}
              type="text"
              marginBottom={3}
            />
            <Input
              variant="outline"
              placeholder={EN.COMMON.PASSWORD}
              value={password}
              onChangeText={(text) => setPassword(text)}
              InputRightElement={
                <Pressable onPress={() => setShowPassword(!showPassword)} marginRight={2}>
                  <IoniconsIcon
                    name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                    size={20}
                    color={Colors.grey}
                  />
                </Pressable>
              }
              type={showPassword ? 'text' : 'password'}
              marginBottom={1}
            />

            <Text
              color={Colors.blueMagenta}
              onPress={() => console.log('Handle user forgot password')}
              fontSize="xs"
              textAlign="right"
            >
              {EN.LOG_IN.FORGOT_PASSWORD}
            </Text>
          </View>
        )}
        <Button
          variant="grey"
          onPress={() =>
            showEmailForm ? handleSignUp({ email, password, setUser }) : setShowEmailForm(true)
          }
        >
          {EN.COMMON.CONTINUE_WITH_EMAIL}
        </Button>

        <Text
          color={Colors.blueMagenta}
          onPress={() => navigation.navigate('LOG_IN')}
          textAlign="center"
          marginTop={3}
        >
          {EN.SIGN_UP.LOGIN_INSTEAD}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

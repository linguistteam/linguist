import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  Pressable,
  Text,
  View,
  WarningOutlineIcon,
} from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { handleSignUp, useCheckLoggedInState } from '@utils';
import { useUserStore } from '@stores/user';
import { EN } from '@assets/strings';
import Colors from '@assets/colors';
import { globalStyles } from '@constants/styles';
import { StackNavigatorList } from '@screens/StackNavigator';
import { authenticationStyles } from './styles';

const SignUp = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackNavigatorList>>();
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setUser = useUserStore((state) => state.setUser);

  // TODO: Set isInvalid from Firebase Auth
  // TODO: Form error messages should be added to strings directory and localized
  const isInvalid = {
    email: false,
    password: false,
  };

  // TODO: Add loading spinner for when user is logging in
  useCheckLoggedInState();

  return (
    <SafeAreaView>
      <Box
        bg={{
          linearGradient: {
            colors: [Colors.yellowLightened80, Colors.blueMagentaLightened80],
            start: [0, 0],
            end: [1, 1],
          },
        }}
        width="100%"
      >
        <View style={globalStyles.appContainer}>
          <View justifyContent="center" height="100%">
            <View marginBottom={8}>
              <Heading size="xl" textAlign="center" style={authenticationStyles.textShadow}>
                {EN.COMMON.HELLO}
              </Heading>
              <Heading size="lg" textAlign="center" style={authenticationStyles.textShadow}>
                {EN.SIGN_UP.SUBHEADING}
              </Heading>
            </View>

            <View marginBottom={4}>
              <Button
                variant="magenta"
                leftIcon={<FontAwesomeIcon name="google" color={Colors.white} size={15} />}
                onPress={() => console.log('Handle Google login')}
                shadow={0}
              >
                {EN.SIGN_UP.CREATE_ACCOUNT_WITH_GOOGLE}
              </Button>
            </View>
            {showEmailForm && (
              <View marginBottom={4}>
                <FormControl isInvalid={isInvalid.email} marginBottom={3}>
                  <Input
                    variant="outline"
                    placeholder={EN.COMMON.EMAIL_ADDRESS}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    type="text"
                  />
                  <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    Invalid email address.
                  </FormControl.ErrorMessage>
                </FormControl>

                <FormControl isInvalid={isInvalid.password} marginBottom={1}>
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
                          color={isInvalid.password ? Colors.error : Colors.grey}
                        />
                      </Pressable>
                    }
                    type={showPassword ? 'text' : 'password'}
                    marginBottom={1}
                  />
                  <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    Incorrect password.
                  </FormControl.ErrorMessage>
                </FormControl>
              </View>
            )}
            <Button
              variant="grey"
              onPress={() =>
                showEmailForm ? handleSignUp({ email, password, setUser }) : setShowEmailForm(true)
              }
              shadow={0}
            >
              {EN.SIGN_UP.CREATE_ACCOUNT_WITH_EMAIL}
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
        </View>
      </Box>
    </SafeAreaView>
  );
};

export default SignUp;

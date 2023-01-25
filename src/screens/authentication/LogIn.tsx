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
import { handleLogin, useCheckLoggedInState } from '@utils';
import { useUserStore } from '@stores/user';
import { useAuthErrorStore } from '@stores/errors/authError';
import { StackNavigatorList } from '@screens/StackNavigator';
import { EN } from '@assets/strings';
import Colors from '@assets/colors';
import { globalStyles } from '@constants/styles';
import { authenticationStyles } from './styles';
import { FormErrors } from './types';

const LogIn = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackNavigatorList>>();
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const firebaseAuthError = useAuthErrorStore((state) => state.error);
  const setUser = useUserStore((state) => state.setUser);
  const setError = useAuthErrorStore((state) => state.setError);
  const resetError = useAuthErrorStore((state) => state.reset);

  const hasEmailAuthError = firebaseAuthError.errorCode?.includes('email') ?? false;
  const hasPasswordAuthError = firebaseAuthError.errorCode?.includes('password') ?? false;
  const hasGeneralAuthError =
    !!firebaseAuthError.errorCode && !hasEmailAuthError && !hasPasswordAuthError;

  // TODO: Use reset error action when invalid form fields are touched
  const formErrors: FormErrors = {
    email: hasEmailAuthError,
    general: hasGeneralAuthError,
    password: hasPasswordAuthError,
  };

  const inputHasError = (inputValue: boolean) => inputValue === true;
  const disableSubmit = showEmailForm
    ? Object.values(formErrors).some(inputHasError) || !email || !password
    : false;

  console.log('firebaseAuthError', firebaseAuthError);

  console.log('formErrors', formErrors);

  console.log('disableSubmit', disableSubmit);

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
      >
        <View style={globalStyles.appContainer}>
          <View justifyContent="center" height="100%">
            <View marginBottom={8}>
              <Heading size="xl" textAlign="center" style={authenticationStyles.textShadow}>
                {EN.COMMON.HELLO}
              </Heading>
              <Heading size="lg" textAlign="center" style={authenticationStyles.textShadow}>
                {EN.LOG_IN.SUBHEADING}
              </Heading>
            </View>

            <View marginBottom={4}>
              <Button
                variant="magenta"
                leftIcon={<FontAwesomeIcon name="google" color={Colors.white} size={15} />}
                onPress={() => console.log('Handle Google login')}
                shadow={0}
              >
                {EN.LOG_IN.CONTINUE_WITH_GOOGLE}
              </Button>
            </View>
            {showEmailForm && (
              <View marginBottom={4}>
                {formErrors.general && (
                  <Text color={Colors.error} marginBottom={2}>
                    {firebaseAuthError.errorMessage}
                  </Text>
                )}

                <FormControl isInvalid={formErrors.email} marginBottom={3} isRequired>
                  <Input
                    variant="outline"
                    placeholder={EN.COMMON.EMAIL_ADDRESS}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    type="text"
                    onTextInput={() => resetError()}
                  />
                  <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    {firebaseAuthError.errorMessage}
                  </FormControl.ErrorMessage>
                </FormControl>

                <FormControl isInvalid={formErrors.password} marginBottom={1} isRequired>
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
                          color={formErrors.password ? Colors.error : Colors.grey}
                        />
                      </Pressable>
                    }
                    type={showPassword ? 'text' : 'password'}
                    onTextInput={() => resetError()}
                  />
                  <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    {firebaseAuthError.errorMessage}
                  </FormControl.ErrorMessage>
                </FormControl>

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
            {/* TODO: Disable button when at least one field is empty, form errors exist */}
            <Button
              variant="grey"
              onPress={() =>
                showEmailForm
                  ? handleLogin({ email, password, setUser, setError })
                  : setShowEmailForm(true)
              }
              shadow={0}
              isDisabled={disableSubmit}
            >
              {EN.LOG_IN.CONTINUE_WITH_EMAIL}
            </Button>

            <Text
              color={Colors.blueMagenta}
              onPress={() => navigation.navigate('SIGN_UP')}
              textAlign="center"
              marginTop={3}
            >
              {EN.LOG_IN.CREATE_ACCOUNT}
            </Text>
          </View>
        </View>
      </Box>
    </SafeAreaView>
  );
};

export default LogIn;

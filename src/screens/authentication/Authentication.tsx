import { useEffect, useState } from 'react';
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
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackNavigatorList } from '@screens/StackNavigator';
import { handleLogin, handleSignUp, validateEmail } from '@utils';
import { useAuthErrorStore } from '@stores/errors/authError';
import { useLoadingStore } from '@stores/loading';
import { EN } from '@assets/strings';
import Colors from '@assets/colors';
import { globalStyles } from '@constants/styles';
import { authenticationStyles } from './styles';
import { FormErrors, PasswordResetRouteParams } from './types';

const Authentication = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackNavigatorList, 'AUTHENTICATION'>>();
  const route = useRoute<RouteProp<{ params: PasswordResetRouteParams }, 'params'>>();
  const showLogIn = { showLogIn: true, showSignUp: false };
  const showSignUp = { showLogIn: false, showSignUp: true };
  const [formView, setFormView] = useState(showLogIn);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const firebaseAuthError = useAuthErrorStore((state) => state.error);
  const setError = useAuthErrorStore((state) => state.setError);
  const resetError = useAuthErrorStore((state) => state.reset);
  const setLoading = useLoadingStore((state) => state.setLoading);
  const hasError = useAuthErrorStore((state) => state.error);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const { passwordReset } = route.params;
  console.log('is password reset', passwordReset);

  // on page load, set password
  useEffect(() => {
    if (hasError) {
      setShowEmailForm(true);
    }
  }, [hasError]);

  const handleAuthCall = () => {
    if (showEmailForm) {
      if (formView.showLogIn) {
        handleLogin({ email, password, setError, setLoading });
      } else {
        handleSignUp({ email, password, setError, setLoading });
      }
    } else {
      setShowEmailForm(true);
    }
  };

  const hasEmailAuthError = firebaseAuthError.errorCode?.includes('email') ?? false;
  const hasPasswordAuthError = firebaseAuthError.errorCode?.includes('password') ?? false;
  const hasGeneralAuthError =
    !!firebaseAuthError.errorCode && !hasEmailAuthError && !hasPasswordAuthError;

  const formErrors: FormErrors = {
    email: hasEmailAuthError,
    general: hasGeneralAuthError,
    password: hasPasswordAuthError,
  };

  const passwordTooShort = password.length < 6;
  const invalidEmail = emailTouched && !validateEmail(email);
  const invalidPassword = passwordTouched && passwordTooShort;

  const inputHasError = (inputValue: boolean) => inputValue === true;
  // NOTE: Disable submit if:
  // Form is being shown and
  // Firebase has thrown error or
  // email is invalid or
  // password is less than 6 chars
  const disableSubmit = showEmailForm
    ? Object.values(formErrors).some(inputHasError) || !validateEmail(email) || passwordTooShort
    : false;

  // TODO: If navigating back to this page after password reset,
  // show alert that says:
  // A link to reset your password has been sent to ${email}.
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
        <View style={globalStyles.appContainer} justifyContent="center" height="100%">
          <View marginBottom={8}>
            <Heading size="xl" textAlign="center" style={authenticationStyles.textShadow}>
              {EN.COMMON.HELLO}
            </Heading>
            <Heading size="lg" textAlign="center" style={authenticationStyles.textShadow}>
              {formView.showLogIn ? EN.LOG_IN.SUBHEADING : EN.SIGN_UP.SUBHEADING}
            </Heading>
          </View>

          <View marginBottom={4}>
            <Button
              variant="magenta"
              leftIcon={<FontAwesomeIcon name="google" color={Colors.white} size={15} />}
              onPress={() => console.log('Handle Google login')}
              shadow={0}
            >
              {formView.showLogIn
                ? EN.LOG_IN.CONTINUE_WITH_GOOGLE
                : EN.SIGN_UP.CREATE_ACCOUNT_WITH_GOOGLE}
            </Button>
          </View>
          {showEmailForm && (
            <View marginBottom={4}>
              {formErrors.general && (
                <Text color={Colors.error} marginBottom={2}>
                  {firebaseAuthError.errorMessage}
                </Text>
              )}

              <FormControl isInvalid={formErrors.email || invalidEmail} marginBottom={3} isRequired>
                <Input
                  variant="outline"
                  placeholder={EN.COMMON.EMAIL_ADDRESS}
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  type="text"
                  onBlur={() => setEmailTouched(true)}
                  onTextInput={() => resetError()}
                />
                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                  {firebaseAuthError.errorMessage || EN.AUTH_ERRORS.INVALID_EMAIL}
                </FormControl.ErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={formErrors.password || invalidPassword}
                marginBottom={1}
                isRequired
              >
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
                        color={formErrors.password || invalidPassword ? Colors.error : Colors.grey}
                      />
                    </Pressable>
                  }
                  type={showPassword ? 'text' : 'password'}
                  onBlur={() => setPasswordTouched(true)}
                  onTextInput={() => resetError()}
                />
                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                  {firebaseAuthError.errorMessage || EN.AUTH_ERRORS.PASSWORD_TOO_SHORT}
                </FormControl.ErrorMessage>
              </FormControl>

              {formView.showLogIn && (
                <Text
                  color={Colors.blueMagenta}
                  onPress={() => navigation.navigate('PASSWORD_RESET')}
                  fontSize="xs"
                  textAlign="right"
                >
                  {EN.LOG_IN.FORGOT_PASSWORD}
                </Text>
              )}
            </View>
          )}

          <Button
            variant="grey"
            onPress={() => handleAuthCall()}
            shadow={0}
            isDisabled={disableSubmit}
          >
            {formView.showLogIn
              ? EN.LOG_IN.CONTINUE_WITH_EMAIL
              : EN.SIGN_UP.CREATE_ACCOUNT_WITH_EMAIL}
          </Button>

          <Text
            color={Colors.blueMagenta}
            onPress={() => (formView.showLogIn ? setFormView(showSignUp) : setFormView(showLogIn))}
            textAlign="center"
            marginTop={3}
          >
            {formView.showLogIn ? EN.LOG_IN.CREATE_ACCOUNT : EN.SIGN_UP.LOGIN_INSTEAD}
          </Text>
        </View>
      </Box>
    </SafeAreaView>
  );
};

export default Authentication;

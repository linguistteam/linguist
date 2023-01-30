import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  Text,
  View,
  WarningOutlineIcon,
} from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { EN } from '@assets/strings';
import Colors from '@assets/colors';
import { globalStyles } from '@constants/styles';
import { handleSendPasswordResetEmail, validateEmail } from '@utils';
import { useAuthErrorStore } from '@stores/errors/authError';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const firebaseAuthError = useAuthErrorStore((state) => state.error);
  const resetError = useAuthErrorStore((state) => state.reset);
  const setError = useAuthErrorStore((state) => state.setError);

  // TODO: Remove once done testing
  const error = useAuthErrorStore((state) => state.error);

  const invalidEmail = emailTouched && !validateEmail(email);
  const disableSubmit = !!firebaseAuthError.errorMessage || !validateEmail(email);

  console.log('error', error);

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
          <Heading marginBottom={3}>{EN.PASSWORD_RESET.HEADING}</Heading>

          <Text marginBottom={3}>{EN.PASSWORD_RESET.ENTER_EMAIL_ADDRESS}</Text>

          <FormControl
            isInvalid={!!firebaseAuthError.errorMessage || invalidEmail}
            marginBottom={3}
            isRequired
          >
            <Input
              variant="outline"
              placeholder={EN.COMMON.EMAIL_ADDRESS}
              value={email}
              onChangeText={(text) => setEmail(text)}
              type="text"
              onChange={() => setEmailTouched(true)}
              onTextInput={() => resetError()}
            />
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              {firebaseAuthError.errorMessage || EN.AUTH_ERRORS.INVALID_EMAIL}
            </FormControl.ErrorMessage>
          </FormControl>

          <Button
            variant="magenta"
            onPress={() => handleSendPasswordResetEmail({ email, setError })}
            shadow={0}
            isDisabled={disableSubmit}
          >
            {EN.PASSWORD_RESET.SEND_RESET_LINK}
          </Button>
        </View>
      </Box>
    </SafeAreaView>
  );
};

export default PasswordReset;

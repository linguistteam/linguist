import { Button, FormControl, Heading, Input, Text, View } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { EN } from '@assets/strings';
import { globalStyles } from '@constants/styles';
import { handleSendPasswordResetEmail } from '@utils';

const PasswordReset = () => {
  return (
    <SafeAreaView>
      <View style={globalStyles.appContainer}>
        <Heading marginBottom={3}>{EN.PASSWORD_RESET.HEADING}</Heading>

        <Text marginBottom={3}>{EN.PASSWORD_RESET.ENTER_EMAIL_ADDRESS}</Text>

        <FormControl isInvalid={true} marginBottom={3} isRequired>
          <Input
            variant="outline"
            placeholder={EN.COMMON.EMAIL_ADDRESS}
            // value={email}
            // onChangeText={(text) => setEmail(text)}
            type="text"
            // onBlur={() => setEmailTouched(true)}
            // onTextInput={() => resetError()}
          />
          {/* <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                        {firebaseAuthError.errorMessage || EN.AUTH_ERRORS.INVALID_EMAIL}
                    </FormControl.ErrorMessage> */}
        </FormControl>

        <Button
          variant="magenta"
          onPress={() => console.log('send pw reset email')}
          shadow={0}
          // isDisabled={disableSubmit}
        >
          {EN.PASSWORD_RESET.SEND_RESET_LINK}
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default PasswordReset;

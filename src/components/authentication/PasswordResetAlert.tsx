import { useEffect, useState } from 'react';
import { Alert, CloseIcon, Collapse, HStack, IconButton, Text, View } from 'native-base';
import { EN } from '@assets/strings';
import { RouteProp } from '@react-navigation/native';
import { PasswordResetRouteParams } from '@screens/authentication/types';
import Colors from '@assets/colors';

interface PasswordResetAlertProps {
  route: RouteProp<{ params: PasswordResetRouteParams }, 'params'>;
}

const PasswordResetAlert = ({ route }: PasswordResetAlertProps) => {
  const { passwordReset, email } = route.params;
  const [showPasswordResetAlert, setShowPasswordResetAlert] = useState(false);

  useEffect(() => {
    setShowPasswordResetAlert(passwordReset);
  }, [passwordReset]);

  return (
    <View position="absolute" width="100%" zIndex={1}>
      <Collapse isOpen={showPasswordResetAlert}>
        <Alert variant="subtle" status="success">
          <HStack justifyContent="space-evenly">
            <HStack space={1.5} flexShrink={1}>
              <Alert.Icon mt="1" />
              <Text color={Colors.black}>{EN.PASSWORD_RESET.RESET_LINK_SENT(email)}</Text>
              <IconButton
                variant="unstyled"
                _focus={{
                  borderWidth: 0,
                }}
                icon={<CloseIcon size="3" />}
                _icon={{
                  color: Colors.grey,
                }}
                onPress={() => setShowPasswordResetAlert(false)}
              />
            </HStack>
          </HStack>
        </Alert>
      </Collapse>
    </View>
  );
};

export default PasswordResetAlert;

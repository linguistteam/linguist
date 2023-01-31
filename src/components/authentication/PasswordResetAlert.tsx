import { useEffect, useState } from 'react';
import { Alert, CloseIcon, Collapse, HStack, IconButton, Text, View } from 'native-base';
import { EN } from '@assets/strings';
import { RouteProp } from '@react-navigation/native';
import { PasswordResetRouteParams } from '@screens/authentication/types';

interface PasswordResetAlertProps {
  route: RouteProp<{ params: PasswordResetRouteParams }, 'params'>;
}

const PasswordResetAlert = ({ route }: PasswordResetAlertProps) => {
  const { passwordReset } = route.params;
  // TODO: Default to false
  const [showPasswordResetAlert, setShowPasswordResetAlert] = useState(true);

  // TODO: Uncommment
  // useEffect(() => {
  //   setShowPasswordResetAlert(passwordReset);
  // }, [passwordReset]);

  return (
    <View position="absolute" width="100%" zIndex={1}>
      <Collapse isOpen={showPasswordResetAlert}>
        <Alert variant="subtle" status="success">
          <HStack justifyContent="space-evenly">
            <HStack space={1.5} flexShrink={1}>
              <Alert.Icon mt="1" />
              <Text color="coolGray.800">{EN.PASSWORD_RESET.RESET_LINK_SENT}</Text>
              <IconButton
                variant="unstyled"
                _focus={{
                  borderWidth: 0,
                }}
                icon={<CloseIcon size="3" />}
                _icon={{
                  color: 'coolGray.600',
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

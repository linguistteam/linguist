import { useEffect } from 'react';
import { Spinner, Center } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@screens/Home';
import { Authentication, PasswordReset } from '@screens/authentication';
import { ClientProfile, TranslatorProfile } from '@screens/userprofiles';
import { useUserStore } from '@stores/user';
import { useLoadingStore } from '@stores/loading';
import Colors from '@assets/colors';
import { EN } from '@assets/strings';
import { handleCheckLoggedInState } from '@utils';
import { PasswordResetRouteParams } from '@screens/authentication/types';

// NOTE: Specifying undefined means that the route doesn't have params
// More info/types here: https://reactnavigation.org/docs/typescript/
export type StackNavigatorList = {
  AUTHENTICATION: PasswordResetRouteParams;
  CLIENT_PROFILE: undefined;
  HOME: undefined;
  PASSWORD_RESET: undefined;
  SIGN_UP: undefined;
  TRANSLATOR_PROFILE: undefined;
};

const Stack = createNativeStackNavigator<StackNavigatorList>();

const StackNavigator = () => {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const resetUser = useUserStore((state) => state.reset);
  const isLoading = useLoadingStore((state) => state.isLoading);
  const isLoggedIn = user.uid;

  useEffect(() => {
    handleCheckLoggedInState({ setUser, resetUser });
  }, [setUser, resetUser]);

  if (isLoading) {
    return (
      <Center flex={1}>
        <Spinner accessibilityLabel={EN.COMMON.LOADING} color={Colors.blueMagenta} size="lg" />
      </Center>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          // TODO: Background color should change based on light/dark mode
          contentStyle: { backgroundColor: Colors.white },
        }}
      >
        {isLoggedIn ? (
          <>
            <Stack.Screen name="HOME" component={Home} />
            <Stack.Screen name="CLIENT_PROFILE" component={ClientProfile} />
            <Stack.Screen name="TRANSLATOR_PROFILE" component={TranslatorProfile} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="AUTHENTICATION"
              component={Authentication}
              initialParams={{ passwordReset: false }}
            />
            <Stack.Screen name="PASSWORD_RESET" component={PasswordReset} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

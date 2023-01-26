import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@screens/Home';
import { Authentication } from '@screens/authentication';
import { ClientProfile, TranslatorProfile } from '@screens/userprofiles';
import { useUserStore } from '@stores/user';

// NOTE: Specifying undefined means that the route doesn't have params
// More info/types here: https://reactnavigation.org/docs/typescript/
export type StackNavigatorList = {
  HOME: undefined;
  CLIENT_PROFILE: undefined;
  AUTHENTICATION: undefined;
  SIGN_UP: undefined;
  TRANSLATOR_PROFILE: undefined;
};

const Stack = createNativeStackNavigator<StackNavigatorList>();

const StackNavigator = () => {
  const user = useUserStore((state) => state.user);
  const isLoggedIn = user.uid;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#fff' },
        }}
      >
        {/* TODO: See if adding loading spinner fixes ERROR: The action
        'REPLACE' with payload {"name":"HOME"} was not handled by any
        navigator. */}
        {isLoggedIn ? (
          <>
            <Stack.Screen name="HOME" component={Home} />
            <Stack.Screen name="CLIENT_PROFILE" component={ClientProfile} />
            <Stack.Screen name="TRANSLATOR_PROFILE" component={TranslatorProfile} />
          </>
        ) : (
          <Stack.Screen name="AUTHENTICATION" component={Authentication} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

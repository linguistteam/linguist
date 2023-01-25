import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@screens/Home';
import { Authentication } from '@screens/authentication';
import { ClientProfile, TranslatorProfile } from '@screens/userprofiles';

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

const StackNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="AUTHENTICATION"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#fff' },
      }}
    >
      <Stack.Screen name="HOME" component={Home} />
      <Stack.Screen name="CLIENT_PROFILE" component={ClientProfile} />
      <Stack.Screen name="AUTHENTICATION" component={Authentication} />
      <Stack.Screen name="TRANSLATOR_PROFILE" component={TranslatorProfile} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default StackNavigator;

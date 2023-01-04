import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@screens/Home';
import { ClientProfile, TranslatorProfile } from '@screens/userprofiles';

export type StackNavigatorList = {
  HOME: undefined;
  CLIENT_PROFILE: undefined;
  TRANSLATOR_PROFILE: undefined;
};

const Stack = createNativeStackNavigator<StackNavigatorList>();

const StackNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="HOME"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#fff' },
      }}
    >
      <Stack.Screen name="HOME" component={Home} />
      <Stack.Screen name="CLIENT_PROFILE" component={ClientProfile} />
      <Stack.Screen name="TRANSLATOR_PROFILE" component={TranslatorProfile} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default StackNavigator;

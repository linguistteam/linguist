import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@screens/Home';
import { TranslatorProfile } from '@screens/userprofiles';

// TODO: Update import if separating components
import ClientProfile from '@screens/userprofiles/ClientProfile';

export type StackNavigatorList = {
  HOME: undefined;
  CLIENT_PROFILE: undefined;
  TRANSLATOR_PROFILE: undefined;
};

const Stack = createNativeStackNavigator<StackNavigatorList>();

const StackNavigator = () => (
  <NavigationContainer>
    {/* // TODO: Add enums for scree names */}
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

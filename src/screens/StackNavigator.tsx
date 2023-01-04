import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@screens/Home';
import { TranslatorProfile } from '@screens/userprofiles';

// TODO: Update import if separating components
import ClientProfile from '@screens/userprofiles/ClientProfile';

export type StackNavigatorList = {
  Home: undefined;
  ClientProfile: undefined;
  TranslatorProfile: undefined;
};

const Stack = createNativeStackNavigator<StackNavigatorList>();

const StackNavigator = () => (
  <NavigationContainer>
    {/* // TODO: Add enums for scree names */}
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#fff' },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ClientProfile" component={ClientProfile} />
      <Stack.Screen name="TranslatorProfile" component={TranslatorProfile} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default StackNavigator;

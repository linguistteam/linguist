import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TranslatorProfile } from '@screens/userprofiles';

// TODO: Update import if separating components
import ClientProfile from '@screens/userprofiles/ClientProfile';

export type StackNavigatorList = {
  TranslatorProfile: undefined;
  ClientProfile: undefined;
};

const Stack = createNativeStackNavigator<StackNavigatorList>();

const StackNavigator = () => (
  <NavigationContainer>
    {/* // TODO: Add enums for scree names */}
    <Stack.Navigator initialRouteName="TranslatorProfile">
      <Stack.Screen name="TranslatorProfile" component={TranslatorProfile} />
      <Stack.Screen name="ClientProfile" component={ClientProfile} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default StackNavigator;

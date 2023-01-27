import { Spinner, HStack, Heading, Center } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@screens/Home';
import { Authentication } from '@screens/authentication';
import { ClientProfile, TranslatorProfile } from '@screens/userprofiles';
import { useUserStore } from '@stores/user';
import { useLoadingStore } from '@stores/loading';
import Colors from '@assets/colors';
import { EN } from '@assets/strings';

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
  const isLoading = useLoadingStore((state) => state.isLoading);
  const isLoggedIn = user.uid;

  if (isLoading) {
    return (
      <Center flex={1} px="3">
        <HStack space={2} alignItems="center">
          <Spinner accessibilityLabel="Loading posts" color={Colors.blueMagenta} />
          <Heading color={Colors.blueMagenta} fontSize="md">
            {EN.COMMON.LOADING}
          </Heading>
        </HStack>
      </Center>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#fff' },
        }}
      >
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

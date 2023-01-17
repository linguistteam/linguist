import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import { StatusBar } from 'expo-status-bar';
import StackNavigator from '@screens/StackNavigator';
import { globalStyles } from '@constants/styles';

// TODO: Set up @react-navigation here. Docs: https://reactnative.dev/docs/navigation
export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaProvider style={globalStyles.appContainer}>
        {/* TODO: Change status bar color based on theme */}
        <StatusBar style="dark" />
        <StackNavigator />
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}

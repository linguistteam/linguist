import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import { StatusBar } from 'expo-status-bar';
import StackNavigator from '@screens/StackNavigator';
import config from '@constants/config';
import theme from '@constants/theme';

export default function App() {
  return (
    <NativeBaseProvider config={config} theme={theme}>
      <SafeAreaProvider>
        {/* TODO: Change status bar color based on theme */}
        <StatusBar style="dark" />
        <StackNavigator />
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}

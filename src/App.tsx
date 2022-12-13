import { StyleSheet } from 'react-native';
import { NativeBaseProvider, View } from 'native-base';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { TranslatorProfile } from '@screens/userprofiles';

// TODO: Set up @react-navigation here. Docs: https://reactnative.dev/docs/navigation
export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <View style={styles.container}>
          {/* TODO: Change status bar color based on theme */}
          <StatusBar style="dark" />
          <TranslatorProfile />
        </View>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

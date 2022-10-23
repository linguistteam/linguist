import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { TranslatorProfile } from './screens/userprofiles';

// TODO: Set up @react-navigation here. Docs: https://reactnative.dev/docs/navigation
export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {/* TODO: Change status bar color bas  ed on theme */}
        <StatusBar style="dark" />
        <TranslatorProfile />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

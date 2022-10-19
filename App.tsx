import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Button } from '@rneui/base';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {/* TODO: Change status bar color based on theme */}
        <StatusBar style="dark" />
        <Text>Hello there!</Text>
        <Button title="Hello World" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@rneui/base';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello there!</Text>
      <Button title="Hello World" />
    </View>
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

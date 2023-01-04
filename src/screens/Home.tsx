import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@common';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackNavigatorList } from './StackNavigator';

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackNavigatorList>>();

  return (
    <SafeAreaView>
      <Button onPress={() => navigation.navigate('TRANSLATOR_PROFILE')} text="Translator Profile" />
      <Button onPress={() => navigation.navigate('CLIENT_PROFILE')} text="Client Profile" />
    </SafeAreaView>
  );
};

export default Home;

import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { Button } from '@common';

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Button onPress={() => navigation.navigate('TranslatorProfile')} text="Translator Profile" />
      <Button onPress={() => navigation.navigate('ClientProfile')} text="Client Profile" />
    </SafeAreaView>
  );
};

export default Home;

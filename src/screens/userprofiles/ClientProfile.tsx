import { Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ClientProfile = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <Text onPress={() => navigation.navigate('TranslatorProfile')}>Test</Text>
        </SafeAreaView>
    );
};

export default ClientProfile;

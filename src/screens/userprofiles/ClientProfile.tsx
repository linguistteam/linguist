import { Text } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

const ClientProfile = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Text onPress={() => navigation.navigate('TranslatorProfile')}>Test</Text>
        </SafeAreaView>
    );
};

export default ClientProfile;

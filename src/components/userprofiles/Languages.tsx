import { Flex, Heading, View } from 'native-base';
import CountryFlag from 'react-native-country-flag';
import Colors from '@assets/colors';
import { languagesStyles } from './styles';

const Languages = () => {
  // TODO: Figure out when we should show England flag vs US flag
  const languages = ['us', 'de', 'jp'];

  return (
    <View>
      <Heading bold size="md" style={languagesStyles.heading}>
        Languages
      </Heading>

      <Flex direction="row" style={languagesStyles.countryFlagRow}>
        {languages.map((language) => (
          <View
            key={language}
            // TODO: Dynamically set bg color
            backgroundColor={Colors.transparentBlueMagenta}
            borderColor={Colors.blueMagenta}
            style={languagesStyles.countryFlagContainer}
          >
            <CountryFlag isoCode={language} size={25} style={languagesStyles.countryFlag} />
          </View>
        ))}
      </Flex>
    </View>
  );
};

export default Languages;

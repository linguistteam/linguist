import { Flex, Heading, View } from 'native-base';
import CountryFlag from 'react-native-country-flag';
import Colors from '@assets/colors';
import { languagesStyles } from './styles';

const Languages = () => {
  // TODO: Figure out when we should show England flag vs US flag
  const languages = ['us', 'de', 'jp', 'br', 'pl', 'ag', 'fr', 'es'];

  return (
    <View>
      <Heading bold size="md" style={languagesStyles.heading}>
        Languages
      </Heading>

      <Flex direction="row" style={languagesStyles.countryFlagRow}>
        {languages.map((language) => {
          return (
            <View
              key={language}
              backgroundColor={Colors.transparentGrey}
              borderColor={Colors.transparentGrey}
              style={languagesStyles.countryFlagContainer}
            >
              <CountryFlag isoCode={language} size={25} style={languagesStyles.countryFlag} />
            </View>
          );
        })}
      </Flex>
    </View>
  );
};

export default Languages;

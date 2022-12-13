import { Flex, Heading, View } from 'native-base';
import CountryFlag from 'react-native-country-flag';
import Colors from '@assets/colors';
import { languagesStyles } from './styles';

const Languages = () => {
  // TODO: Lanugage data coming from DB needs to match ISO 3166-1 alpha-2
  const languages = ['gb', 'de', 'jp'];

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

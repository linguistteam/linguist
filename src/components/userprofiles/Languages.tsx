import { Flex, Heading, View } from 'native-base';
import CountryFlag from 'react-native-country-flag';
import Colors from '@assets/colors';
import { languageMatch } from '@utils';
import { languagesStyles } from './styles';

const Languages = () => {
  // TODO: Figure out when we should show England flag vs US flag
  const languages = ['us', 'de', 'jp'];
  const userLanguages = ['us'];

  return (
    <View>
      <Heading bold size="md" style={languagesStyles.heading}>
        Languages
      </Heading>

      <Flex direction="row" style={languagesStyles.countryFlagRow}>
        {languages.map((language) => (
          <View
            key={language}
            backgroundColor={
              languageMatch(languages, userLanguages, language)
                ? Colors.transparentBlueMagenta
                : Colors.transparentGrey
            }
            borderColor={
              languageMatch(languages, userLanguages, language) ? Colors.blueMagenta : Colors.grey
            }
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

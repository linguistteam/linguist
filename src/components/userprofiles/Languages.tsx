import { Flex, Heading, View } from 'native-base';
import CountryFlag from 'react-native-country-flag';
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
          <CountryFlag
            isoCode={language}
            key={language}
            size={25}
            style={languagesStyles.countryFlag}
          />
        ))}
      </Flex>
    </View>
  );
};

export default Languages;

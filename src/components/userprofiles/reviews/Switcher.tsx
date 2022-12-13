import { Text, View } from 'native-base';

/* Reviews structure:
  profileImage: string
  name: string
  reviewDate: date string
  rating: number
  review: string
  isTopLinguist: boolean
  isTranslator: boolean
*/
type SwitcherProps = {
  profileImage: string;
  name: string;
  reviewDate: Date;
  rating: number;
  review: string;
  isTopLinguist?: boolean;
  isTranslator?: boolean;
};

// const reviews = [{  }]

const Switcher = () => {
  return (
    <View>
      <Text bold fontSize="sm">
        From clients
      </Text>
    </View>
  );
};

export default Switcher;

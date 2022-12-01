import { View } from 'react-native';
import { Text } from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import Colors from '../../assets/colors';
import { styles } from './styles';

const UserRating = () => {
  // TODO: Should be passed in from DB
  const rating = 4.5;

  return (
    <View style={styles.container}>
      <Icon name="star" size={19} color={Colors.yellow} />
      <Text bold color="#2980F2" fontSize="xl" style={styles.contentItem}>
        {rating}
      </Text>
    </View>
  );
};

export default UserRating;

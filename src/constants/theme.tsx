import { extendTheme } from 'native-base';
import Colors from '@assets/colors';

const theme = extendTheme({
  components: {
    Button: {
      variants: {
        magenta: {
          bg: Colors.blueMagenta,
          borderRadius: 20,
          height: 45,
          _text: {
            color: Colors.white,
            fontWeight: '700',
          },
          _pressed: {
            bg: Colors.lightenedBlueMagenta,
          },
        },
        grey: {
          bg: Colors.grey,
          borderRadius: 20,
          height: 45,
          _text: {
            color: Colors.white,
            fontWeight: '700',
          },
          _pressed: {
            bg: Colors.lightenedGrey,
          },
        },
      },
    },
  },
});

export default theme;

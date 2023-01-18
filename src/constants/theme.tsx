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
            bg: Colors.blueMagentaLightened20,
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
    Input: {
      baseStyle: {
        borderColor: Colors.grey,
        placeholderTextColor: Colors.grey,

        _invalid: {
          borderColor: 'error.500',
        },
        _focus: {
          backgroundColor: 'warmGray.200',
          borderColor: Colors.blueMagenta,
        },
      },
    },
  },
});

export default theme;

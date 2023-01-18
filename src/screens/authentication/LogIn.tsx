import { useState } from 'react';
import { Box, Button, Heading, Input, Pressable, Text, View } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { handleLogin, useCheckLoggedInState } from '@utils';
import { useUserStore } from '@stores/user';
import { EN } from '@assets/strings';
import Colors from '@assets/colors';
import { globalStyles } from '@constants/styles';
import { StackNavigatorList } from '@screens/StackNavigator';
import { authenticationStyles } from './styles';

const LogIn = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackNavigatorList>>();
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setUser = useUserStore((state) => state.setUser);

  // TODO: Add loading spinner for when user is logging in
  useCheckLoggedInState();

  return (
    <SafeAreaView>
      <Box
        bg={{
          linearGradient: {
            colors: [Colors.yellowLightened80, Colors.blueMagentaLightened80],
            start: [0, 0],
            end: [1, 1],
          },
        }}
        width="100%"
      >
        <View style={globalStyles.appContainer}>
          <View justifyContent="center" height="100%">
            <View marginBottom={8}>
              <Heading size="xl" textAlign="center" style={authenticationStyles.textShadow}>
                {EN.COMMON.HELLO}
              </Heading>
              <Heading size="lg" textAlign="center" style={authenticationStyles.textShadow}>
                {EN.LOG_IN.SUBHEADING}
              </Heading>
            </View>

            <View marginBottom={4}>
              <Button
                variant="magenta"
                leftIcon={<FontAwesomeIcon name="google" color={Colors.white} size={15} />}
                onPress={() => console.log('Handle Google login')}
                shadow={0}
              >
                {EN.LOG_IN.CONTINUE_WITH_GOOGLE}
              </Button>
            </View>
            {showEmailForm && (
              <View marginBottom={4}>
                <Input
                  variant="outline"
                  placeholder={EN.COMMON.EMAIL_ADDRESS}
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  type="text"
                  marginBottom={3}
                />
                <Input
                  variant="outline"
                  placeholder={EN.COMMON.PASSWORD}
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  InputRightElement={
                    <Pressable onPress={() => setShowPassword(!showPassword)} marginRight={2}>
                      <IoniconsIcon
                        name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                        size={20}
                        color={Colors.grey}
                      />
                    </Pressable>
                  }
                  type={showPassword ? 'text' : 'password'}
                  marginBottom={1}
                />

                <Text
                  color={Colors.blueMagenta}
                  onPress={() => console.log('Handle user forgot password')}
                  fontSize="xs"
                  textAlign="right"
                >
                  {EN.LOG_IN.FORGOT_PASSWORD}
                </Text>
              </View>
            )}
            <Button
              variant="grey"
              onPress={() =>
                showEmailForm ? handleLogin({ email, password, setUser }) : setShowEmailForm(true)
              }
              shadow={0}
            >
              {EN.LOG_IN.CONTINUE_WITH_EMAIL}
            </Button>

            <Text
              color={Colors.blueMagenta}
              onPress={() => navigation.navigate('SIGN_UP')}
              textAlign="center"
              marginTop={3}
            >
              {EN.LOG_IN.CREATE_ACCOUNT}
            </Text>
          </View>
        </View>
      </Box>
    </SafeAreaView>
  );
};

export default LogIn;

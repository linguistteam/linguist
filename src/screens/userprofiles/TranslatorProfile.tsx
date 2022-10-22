import { Image, ScrollView, View } from 'react-native';
import { Text } from '@rneui/base';
import { styles } from './styles';

// TODO: Fix eslint indent issues
const TranslatorProfile = () => {
    // TODO: All values here should be editable by user and passed in from DB
    const image = '../../assets/images/stock/profile-user.jpeg';
    const name = 'John Doe';

    return (
        <ScrollView>
            <Image source={require(image)} style={styles.profileImage} />

            <View style={styles.profileContent}>
                <Text h1>{name}</Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. In pellentesque massa placerat duis ultricies lacus sed.
                    Aliquet nibh praesent tristique magna sit amet purus gravida quis. Pulvinar sapien et
                    ligula ullamcorper malesuada proin libero. Faucibus pulvinar elementum integer enim. Id
                    venenatis a condimentum vitae sapien pellentesque. Ornare aenean euismod elementum nisi
                    quis eleifend. Ornare arcu odio ut sem nulla. Arcu non odio euismod lacinia at quis risus
                    sed vulputate. In iaculis nunc sed augue lacus. Morbi leo urna molestie at elementum eu.
                    Quis auctor elit sed vulputate mi sit amet mauris. Sagittis aliquam malesuada bibendum
                    arcu vitae elementum curabitur vitae nunc. A iaculis at erat pellentesque adipiscing
                    commodo elit at. Proin libero nunc consequat interdum. Elementum nibh tellus molestie nunc
                    non blandit massa enim nec. Velit euismod in pellentesque massa placerat duis ultricies
                    lacus sed. Turpis cursus in hac habitasse platea dictumst quisque. A diam sollicitudin
                    tempor id eu. Nulla pharetra diam sit amet nisl suscipit adipiscing. Diam phasellus
                    vestibulum lorem sed risus. Aliquet enim tortor at auctor urna. Leo urna molestie at
                    elementum eu facilisis sed odio. Duis tristique sollicitudin nibh sit amet. Sollicitudin
                    tempor id eu nisl nunc. Sit amet mauris commodo quis. Sit amet consectetur adipiscing elit
                    duis tristique sollicitudin. Dui ut ornare lectus sit amet est placerat in egestas.
                    Interdum velit euismod in pellentesque massa placerat duis ultricies. Ipsum suspendisse
                    ultrices gravida dictum. Euismod nisi porta lorem mollis aliquam ut porttitor leo a.
                    Aliquam sem et tortor consequat id porta nibh. Mus mauris vitae ultricies leo integer.
                    Blandit massa enim nec dui. Ut enim blandit volutpat maecenas volutpat. Mi ipsum faucibus
                    vitae aliquet nec. Duis ut diam quam nulla porttitor massa id neque aliquam. Phasellus
                    faucibus scelerisque eleifend donec pretium. Nisl tincidunt eget nullam non nisi est. Arcu
                    non sodales neque sodales ut etiam sit amet nisl. Urna molestie at elementum eu facilisis
                    sed. Mollis nunc sed id semper risus in hendrerit gravida. Sed id semper risus in. Leo a
                    diam sollicitudin tempor. Fames ac turpis egestas sed tempus urna et. Lectus arcu bibendum
                    at varius vel pharetra vel turpis. In hac habitasse platea dictumst. Phasellus egestas
                    tellus rutrum tellus pellentesque eu tincidunt tortor. In fermentum posuere urna nec
                    tincidunt praesent semper. Maecenas accumsan lacus vel facilisis volutpat. Tristique magna
                    sit amet purus. At urna condimentum mattis pellentesque id nibh. Dignissim cras tincidunt
                    lobortis feugiat vivamus at augue eget arcu. Elementum facilisis leo vel fringilla est
                    ullamcorper eget. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam.
                </Text>
            </View>
        </ScrollView>
    );
};

export default TranslatorProfile;

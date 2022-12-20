import { ReviewsType } from '@components/userprofiles/reviews/Reviews';
import moment from 'moment';

const dummyDateNow = moment();
const dummyDateTomorrow = moment(dummyDateNow).add(1, 'days');
const dummyDateOneHourAgo = moment(dummyDateNow).subtract(1, 'hours');
const dummyDateYesterday = moment(dummyDateNow).subtract(1, 'days');
const dummyDateOneWeeksAgo = moment(dummyDateNow).subtract(7, 'days');

// TODO: User id should be generated from react-native-uuid
// NOTE: Stars can only be full or half
const reviews: ReviewsType = {
  fromClients: [
    {
      userId: 'c5ca67d5-a754-465d-add9-7508cfe0d128',
      profileImage: '',
      name: 'Jane Crow',
      reviewDate: dummyDateOneHourAgo,
      rating: 5.0,
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas integer eget aliquet nibh praesent. Dictum sit amet justo donec enim diam vulputate ut. Et ligula ullamcorper malesuada proin libero nunc consequat. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Sit amet dictum sit amet justo. Libero id faucibus nisl tincidunt eget nullam. Nibh praesent tristique magna sit amet purus gravida quis. Ultricies integer quis auctor elit sed vulputate mi sit. Suspendisse interdum consectetur libero id faucibus nisl tincidunt. Aliquet eget sit amet tellus cras adipiscing enim. Dictum at tempor commodo ullamcorper a lacus. Sapien faucibus et molestie ac feugiat sed. Vel pretium lectus quam id.',
    },
    {
      userId: 'c5ca67d5-a754-465d-add9-7508cfe0d129',
      profileImage: '',
      name: 'Jane Toe',
      reviewDate: dummyDateOneHourAgo,
      rating: 5.0,
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas integer eget aliquet nibh praesent. Dictum sit amet justo donec enim diam vulputate ut. Et ligula ullamcorper malesuada proin libero nunc consequat. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Sit amet dictum sit amet justo. Libero id faucibus nisl tincidunt eget nullam. Nibh praesent tristique magna sit amet purus gravida quis. Ultricies integer quis auctor elit sed vulputate mi sit. Suspendisse interdum consectetur libero id faucibus nisl tincidunt. Aliquet eget sit amet tellus cras adipiscing enim. Dictum at tempor commodo ullamcorper a lacus. Sapien faucibus et molestie ac feugiat sed. Vel pretium lectus quam id.',
    },
    {
      userId: '3bc88969-df04-44d7-965a-149590e4bf91',
      profileImage:
        'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      name: 'Shane Doe',
      reviewDate: dummyDateYesterday,
      rating: 4.5,
      review:
        'Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Aliquam faucibus purus in massa tempor nec feugiat. Tortor consequat id porta nibh venenatis cras sed. Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Id ornare arcu odio ut sem nulla pharetra diam sit.',
    },
    {
      userId: '3bc88969-df04-44d7-965a-149590e4bf92',
      profileImage:
        'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      name: 'Shane Toe',
      reviewDate: dummyDateYesterday,
      rating: 4.5,
      review:
        'Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Aliquam faucibus purus in massa tempor nec feugiat. Tortor consequat id porta nibh venenatis cras sed. Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Id ornare arcu odio ut sem nulla pharetra diam sit.',
    },
    {
      userId: '3bc88969-df04-44d7-965a-149590e4bf93',
      profileImage:
        'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      name: 'Shane Moe',
      reviewDate: dummyDateYesterday,
      rating: 4.5,
      review:
        'Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Aliquam faucibus purus in massa tempor nec feugiat. Tortor consequat id porta nibh venenatis cras sed. Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Id ornare arcu odio ut sem nulla pharetra diam sit.',
    },
    {
      userId: '996c19c0-5aa0-4ad6-b0a2-c33de9034ebd',
      profileImage:
        'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
      name: 'Jane Stow',
      reviewDate: dummyDateNow,
      rating: 4,
      review:
        'Mi sit amet mauris commodo. Dignissim diam quis enim lobortis scelerisque fermentum dui. Arcu risus quis varius quam quisque id diam. Lectus urna duis convallis convallis.',
    },
    {
      userId: '996c19c0-5aa0-4ad6-b0a2-c33de9034ebe',
      profileImage:
        'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
      name: 'Jane Low',
      reviewDate: dummyDateNow,
      rating: 4,
      review:
        'Mi sit amet mauris commodo. Dignissim diam quis enim lobortis scelerisque fermentum dui. Arcu risus quis varius quam quisque id diam. Lectus urna duis convallis convallis.',
    },
    {
      userId: '996c19c0-5aa0-4ad6-b0a2-c33de9034ebf',
      profileImage:
        'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
      name: 'Jane Foe',
      reviewDate: dummyDateNow,
      rating: 4,
      review:
        'Mi sit amet mauris commodo. Dignissim diam quis enim lobortis scelerisque fermentum dui. Arcu risus quis varius quam quisque id diam. Lectus urna duis convallis convallis.',
    },
    {
      userId: '996c19c0-5aa0-4ad6-b0a2-c33de9034ebt',
      profileImage:
        'https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      name: 'Jane Woe',
      reviewDate: dummyDateTomorrow,
      rating: 5,
      review: 'Nec sagittis aliquam malesuada bibendum arcu vitae elementum.',
    },
    {
      userId: '996c19c0-5aa0-4ad6-b0a2-c33de9034ebo',
      profileImage:
        'https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      name: 'Jane Yo',
      reviewDate: dummyDateTomorrow,
      rating: 5,
      review: 'Nec sagittis aliquam malesuada bibendum arcu vitae elementum.',
    },
    {
      userId: '996c19c0-5aa0-4ad6-b0a2-c33de9034ebm',
      profileImage:
        'https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      name: 'Jane Doe',
      reviewDate: dummyDateTomorrow,
      rating: 5,
      review: 'Nec sagittis aliquam malesuada bibendum arcu vitae elementum.',
    },
  ],
  fromTranslators: [
    {
      userId: '996c19c0-5aa0-4ad6-b0a2-c33de9034eb1',
      profileImage:
        'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      name: 'Jane Moe',
      reviewDate: dummyDateNow,
      rating: 4.7,
      review:
        'Mi sit amet mauris commodo. Dignissim diam quis enim lobortis scelerisque fermentum dui. Arcu risus quis varius quam quisque id diam. Lectus urna duis convallis convallis.',
      isTopLinguist: true,
    },
    {
      userId: '3bc88969-df04-44d7-965a-149590e4bf90',
      profileImage:
        'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      name: 'Rain Doe',
      reviewDate: dummyDateOneWeeksAgo,
      rating: 4.5,
      review:
        'Etiam dignissim diam quis enim lobortis scelerisque fermentum. Enim blandit volutpat maecenas volutpat blandit. Gravida cum sociis natoque penatibus et magnis dis parturient montes. Sit amet mauris commodo quis imperdiet. Pulvinar elementum integer enim neque volutpat ac. Elementum integer enim neque volutpat. Cursus sit amet dictum sit amet justo donec enim. Cras adipiscing enim eu turpis egestas pretium. Sit amet aliquam id diam maecenas ultricies. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Ultrices sagittis orci a scelerisque. Est lorem ipsum dolor sit amet. Ultrices neque ornare aenean euismod elementum nisi quis. Facilisis leo vel fringilla est ullamcorper eget nulla. Interdum velit euismod in pellentesque massa placerat. Sem nulla pharetra diam sit amet nisl suscipit adipiscing.',
      isTopLinguist: false,
    },
  ],
};

export default reviews;

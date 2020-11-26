import React from 'react';
import {View} from 'react-native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function CompleteSignup() {
  return (
    <View style={{flex: 1, backgroundColor: '#1B1E3C'}}>
      <View
        style={{
          backgroundColor: '#0d2332',
          height: hp('30%'),
          width: wp('100%'),
          position: 'absolute',
          borderColor: 'white',
          borderWidth: 2,
          borderBottomRightRadius: 30,
          borderBottomLeftRadius: 30,
        }}></View>
    </View>
  );
}

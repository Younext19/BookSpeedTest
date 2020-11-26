import React, {useState} from 'react';
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
  Button,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default function Signup({navigation}) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };
  return (
    <View style={{flex: 1, backgroundColor: '#1B1E3C'}}>
      <View
        style={{
          backgroundColor: '#0d2332',
          height: 450,
          width: 450,
          position: 'absolute',
          borderRadius: 450 / 2,
          top: -100,
          left: -100,
        }}></View>
      <View
        style={{alignItems: 'center', justifyContent: 'center', marginTop: 40}}>
        <Image
          source={require('../assets/logo.png')}
          style={{
            width: 100,
            height: 100,
          }}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontSize: 30,
            padding: 30,
            fontWeight: 'bold',
          }}>
          Signup
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            marginTop: 7,
            fontWeight: 'bold',
          }}>
          FullName :{' '}
        </Text>
        <TextInput
          placeholder="Haddam Younes"
          placeholderTextColor="grey"
          color="white"
          style={{
            borderRadius: 10,

            padding: 9,
            borderBottomWidth: 3,
            borderColor: 'white',
            width: 300,
          }}
        />

        <Text
          style={{
            fontSize: 20,
            color: 'white',
            marginTop: 7,
            fontWeight: 'bold',
          }}>
          Email :
        </Text>
        <TextInput
          placeholder="haddamyounes5@gmail.com"
          placeholderTextColor="grey"
          style={{
            borderRadius: 10,
            padding: 9,
            borderBottomWidth: 3,
            borderColor: 'white',
            width: 300,
          }}
        />

        <Text
          style={{
            fontSize: 20,
            color: 'white',
            marginTop: 7,
            fontWeight: 'bold',
          }}>
          Password :{' '}
        </Text>
        <TextInput
          placeholder="*********"
          placeholderTextColor="grey"
          style={{
            borderRadius: 10,
            padding: 9,
            borderBottomWidth: 3,
            borderColor: 'white',
            width: 300,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CompleteSignup');
          }}
          style={{
            backgroundColor: 'white',
            width: 300,
            marginTop: 30,
            borderWidth: 3,
            padding: 9,
            borderRadius: 10,
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 26, color: 'black', fontWeight: 'bold'}}>
              Signup
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={{color: 'white', fontSize: 20}}>
            Already Have An Account ?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

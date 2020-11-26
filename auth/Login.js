import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
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
export default function Login({navigation}) {
  function WhenLogin() {
    console.log('asip');
  }
  return (
    <View style={{flex: 1, backgroundColor: '#1B1E3C'}}>
      <View
        style={{
          backgroundColor: '#0d2332',
          height: hp('55%'),
          width: wp('110%'),
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
            width: 200,
            height: 200,
          }}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 26,
            fontWeight: 'bold',
            marginTop: 30,
            color: 'white',
          }}>
          Login
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          marginLeft: 10,
          alignItems: 'center',
        }}>
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

        <TextInput
          placeholder="**********"
          placeholderTextColor="grey"
          style={{
            borderRadius: 10,

            padding: 9,
            borderBottomWidth: 3,
            borderColor: 'white',
            width: 300,
          }}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            WhenLogin();
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
              Login
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{}}>
          <TouchableOpacity
            onPress={() => {
              console.log('hi');
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'right',
                alignSelf: 'flex-end',
              }}>
              Forgot Password ?
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 19,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity>
            <Image
              source={require('../assets/facebook.png')}
              style={{width: 50, height: 50}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: 50}}>
            <Image
              source={require('../assets/gmail.png')}
              style={{width: 50, height: 50}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: 50}}>
            <Image
              source={require('../assets/google.png')}
              style={{width: 50, height: 50}}
            />
          </TouchableOpacity>
        </View>

        {/* Create new account */}
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Signup');
            }}
            style={{
              backgroundColor: 'white',
              width: 300,
              marginTop: 30,
              borderWidth: 3,
              padding: 2,
              borderRadius: 10,
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 26, color: 'black', fontWeight: 'bold'}}>
                Create a New Account
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

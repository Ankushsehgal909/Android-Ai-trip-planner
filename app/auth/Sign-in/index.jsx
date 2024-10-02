import { View, Text,StyleSheet, TouchableOpacity,TextInput, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRouter, useNavigation } from 'expo-router'
import { Colors } from '../../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../config/FirebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function index() {
    const router=useRouter()
    const navigation = useNavigation();
    const [email,SetEmail]=useState()
    const [password,SetPassword]=useState()

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    },[])

    const onSingIn=()=>{
        if(!email && !password){
            ToastAndroid.show('Please enter your email and password', ToastAndroid.SHORT)
            return;
                }
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    AsyncStorage.setItem('user', JSON.stringify(user));
    router.replace('/MyTrip');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    if(errorCode=='auth/invalid-credential'){
        ToastAndroid.show('Invalid email or password', ToastAndroid.SHORT)
    }
  });
    }

    return (
        <View style={{
            padding: 25,

            backgroundColor: Colors.white,
            height: '100%'
        }}>
            <TouchableOpacity
                onPress={() => router.back()}
            >
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 30,
                marginTop: 60
            }}>Let's Sign You In</Text>
            <Text style={{
                fontFamily: 'outfit',
                fontSize: 30,
                marginTop: 20
            }}>Welcome Back</Text>
            <Text style={{
                fontFamily: 'outfit',
                fontSize: 30,
                marginTop: 20
            }}>You've been missed</Text>
                        {/* emain */}
            <View style={{
                marginTop:50
            }}>
                <Text>Email</Text>
                <TextInput
                onChangeText={(value)=>SetEmail(value)}
                style={styles.input} 
                placeholder='Enter Email'/>
            </View>

            {/* password */}
            <View style={{
                marginTop:20
            }}>
                <Text>Password</Text>
                <TextInput
                onChangeText={(value)=>SetPassword(value)}
                secureTextEntry={true}
                style={styles.input} 
                placeholder='Enter Password'/>
            </View>
           {/* Sign In Button */}
           <TouchableOpacity 
           onPress={onSingIn}
           style={{
            marginTop: 20,
            backgroundColor:Colors.black,
            padding: 20,
            borderRadius: 15,
           }}>
            <Text style={{
                color: Colors.white,
                textAlign:'center'
            }}>
                Sign In
            </Text>
           </TouchableOpacity>

           {/* Create Acc Button */}
           <TouchableOpacity 
           onPress={()=>router.replace('auth/Sign-up')}
           style={{
            marginTop: 20,
            backgroundColor:Colors.white,
            padding: 20,
            borderRadius: 15,
            borderWidth:1
           }}>
            <Text style={{
                color: Colors.black,
                textAlign:'center'
            }}>
                Create Account
            </Text>
           </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
  input:{
    padding:15,
    borderWidth:1,
    borderRadius:15,
    borderColor:Colors.gray,
    fontFamily:'outfit'
  }
})
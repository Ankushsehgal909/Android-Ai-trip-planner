import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useReducer, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../config/FirebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function index() {

    const [email,SetEmail]=useState()
    const [password,SetPassword]=useState()
    const [confirPpassword,SetConfirmPassword]=useState()
    const [fullname,SetFullName]=useState()

    const router=useRouter()
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    const onCreateAccount=()=>{
        if(!email && !password && !confirPpassword && !fullname){
        ToastAndroid.show('Please Enter All Details',ToastAndroid.BOTTOM)
        }
        if(password !== confirPpassword){
        ToastAndroid.show('Password not match',ToastAndroid.BOTTOM)
        }
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
     AsyncStorage.setItem('user', JSON.stringify(user));
    router.replace('/MyTrip');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
    }
    return (
        <View style={{
            padding: 25,
           
            backgroundColor: Colors.white,
            height:'100%'
        }}>
              <TouchableOpacity
                onPress={() => router.back()}
            >
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 30,
                marginTop:30
            }}>Create new Account</Text>
            {/* user full name */}
            <View style={{
                marginTop: 50
            }}>
                <Text>Full Name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(value)=>SetFullName(value)}
                    placeholder='Enter Full Name' />
            </View>
            <View style={{
                marginTop: 20
            }}>
                <Text>Email</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(value)=>SetEmail(value)}
                    placeholder='Enter Email' />
            </View>

            {/* password */}
            <View style={{
                marginTop: 20
            }}>
                <Text>Password</Text>
                <TextInput
                    secureTextEntry={true}
                    onChangeText={(value)=>SetPassword(value)}
                    style={styles.input}
                    placeholder='Enter Password' />
            </View>
            {/* confirm password */}
            <View style={{
                marginTop: 20
            }}>
                <Text>Confirm Password</Text>
                <TextInput
                    secureTextEntry={true}
                    onChangeText={(value)=>SetConfirmPassword(value)}
                    style={styles.input}
                    placeholder='Enter Password' />
            </View>
            {/* Sign In Button */}
            <TouchableOpacity 
            onPress={onCreateAccount}
            style={{
                marginTop: 20,
                backgroundColor: Colors.black,
                padding: 20,
                borderRadius: 15,
            }}>
                <Text style={{
                    color: Colors.white,
                    textAlign: 'center'
                }}>
                    Create Account
                </Text>
            </TouchableOpacity>
               {/* Create Acc Button */}
           <TouchableOpacity 
           onPress={()=>router.replace('auth/Sign-in')}
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
                Sign In
            </Text>
           </TouchableOpacity>
        
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        padding: 15,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: Colors.gray,
        fontFamily: 'outfit'
    }
})
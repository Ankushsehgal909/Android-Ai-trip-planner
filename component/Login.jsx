import React, { Component } from 'react';
import { Image, View, StyleSheet,Text, Touchable, TouchableOpacity } from 'react-native';
import home from '../assets/images/home.jpg';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';

export default function Login()  {
    const router=useRouter();


    return (
      <View style={{
        flex:1,
        width:'100%'
      }} >
        <Image source={home} style={styles.image} />

      <View style={styles.container}>
        <Text style={{
            fontSize:28,
            fontFamily:'outfit-bold',
            textAlign:'center',
            marginTop:10
        }}>Plan Your Trip With AI</Text>
      <Text style={{
        fontFamily:'outfit',
        fontSize:16,
        color:Colors.gray,
        textAlign:'center',
        marginTop:20
      }}>
        Discover your next adventure effortlessly. Personalized itinerary at your fingertips. Travel smarter with AI-driven insights.
      </Text>
      <TouchableOpacity 
      onPress={()=>router.push('auth/Sign-in')}
      style={styles.button}>
        <Text style={{
            color:Colors.white,
            textAlign:'center',
            fontFamily:'outfit',
            fontSize:17
        }}>
            Get Started
        </Text>
      </TouchableOpacity>
      </View >
      </View>


    );
  }


const styles = StyleSheet.create({
  container: {
    backgroundColor:Colors.white,
    marginTop:-20,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    padding:20,
    height:'100%',
  
  },
  button:{
    padding:15,
    backgroundColor:Colors.black,
    borderRadius:99,
    marginTop:'25%'
  },

  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
  },
});

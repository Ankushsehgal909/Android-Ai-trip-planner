import { View, Text, Image } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { AI_PROMPT } from '../../constants/options';
import { chatSession } from '../service/gemini';
import { createTripContext } from '../../context/createTripContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth, db } from '../../config/FirebaseConfig.js';
import { doc, setDoc, collection, CollectionReference } from 'firebase/firestore';

export default function Loading() {

  const router = useRouter()
  const user = auth.currentUser;
  const { tripData, setTripData } = useContext(createTripContext)
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })

    const OnGenerateTrip = async () => {
      console.log(tripData)
      const FINAL_PROMPT = AI_PROMPT
        .replace('{location}', tripData.location)
        .replace("{totaldays}", tripData.totalDays)
        .replace('{travel}', tripData.people)
        .replace('{budget}', tripData.budget)
        .replace('{totaldays}', tripData.totalDays);
      console.log(FINAL_PROMPT)
      console.log(user)
      const result = await chatSession.sendMessage(FINAL_PROMPT);
      const newResult = JSON.parse(result.response.text());


      // Store the updated array back to AsyncStorage
      await AsyncStorage.setItem('tripResults', JSON.stringify(newResult));
      router.replace('/MyTrip')


    };
    OnGenerateTrip();

  }, [])
  return (
    <View style={{
      padding: 15
    }}>
      <Text style={{
        fontSize: 40,
        fontFamily: 'outfit-bold',
        marginTop: 30,
        textAlign: 'center'
      }}>Please Wait...</Text>
      <Text style={{
        fontFamily: 'outfit-md',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10
      }}>We are working to generate your dream trip</Text>
      <Image source={require('../../assets/images/loading2.gif')}
        style={{
          width: '100%',
          objectFit: 'contain'
        }} />
      <Text
        style={{
          fontSize: 20,
          color: Colors.gray,
          fontFamily: 'outfit',
          textAlign: 'center'
        }}>Do not go back</Text>
    </View>
  )
}
import { View, Text, TouchableOpacity, FlatList, ScrollView, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from '../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TripDetailScreen from '../create-trip/TripDetailScreen';

export default function MyTrip() {
  const [results, setResults] = useState();
  const router = useRouter();

  useEffect(() => {
    const fetchResults = async () => {
      const storedResults = await AsyncStorage.getItem('tripResults');
      
      if (storedResults) {
        setResults(JSON.parse(storedResults));
      }
    };

    fetchResults();
    // console.log(results)


  }, []);



  return (
    <ScrollView style={{ padding: 25, backgroundColor: Colors.white, height: '100%' }}>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ marginTop: 50, fontFamily: 'outfit-bold', fontSize: 35 }}>MyTrip</Text>
        <TouchableOpacity onPress={() => router.push('/create-trip/search-place')}>
          
        <Ionicons style={{ marginTop: 50 }} name="add-circle" size={50} color="black" />
        </TouchableOpacity>
      </View>

      {results ? (
       
          <TouchableOpacity 
          onPress={()=>router.push('/create-trip/TripDetailScreen')}
          style={{
            borderWidth:1,
            borderRadius:10,
            display:'flex',
            flexDirection:'row',
            backgroundColor:Colors.black,
            marginTop:10
          }}>
          <Image source={require('../.././assets/images/hotel.jpg')}
          style={{
            height:50,
            width:50,
            borderBottomLeftRadius:9,
            borderTopLeftRadius:9,
          }}/>
           <View style={{
            flex:1,
            alignContent:'center',
            justifyContent:'center'
           }}>
            <Text style={{
            color:Colors.white,
            fontFamily:'outfit-bold',
            fontSize:22,
            textAlign:'center'

           }}>View plan</Text></View>
          </TouchableOpacity>
         
      ) : (
        <View style={{ marginTop: 50, alignItems: 'center' }}>
          <Ionicons name="location" size={24} color="black" />
          <Text style={{ fontFamily: 'outfit-bold', fontSize: 30 }}>No trip planned yet</Text>
          <Text style={{ fontFamily: 'outfit', color: Colors.gray, fontSize: 20, textAlign: 'center' }}>
            Looks like it's time to plan a new travel experience! Get started below
          </Text>
          <TouchableOpacity 
        onPress={() => router.push('/create-trip/search-place')}
        style={{
          backgroundColor: Colors.black,
          borderRadius: 15,
          padding: 15,
          margin: 50,
        }}>
        <Text style={{
          color: Colors.white,
          textAlign: 'center',
        }}>Get Started</Text>
      </TouchableOpacity>
        </View>
      )}

      
    </ScrollView>
  );
}

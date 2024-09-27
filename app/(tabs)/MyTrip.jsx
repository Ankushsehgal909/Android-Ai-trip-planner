import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

export default function MyTrip() {
  const router=useRouter()
  return (
    <View style={{
      padding:25,
      backgroundColor:Colors.white,
      height:'100%',
     
    }}>
      <View style={{ display:'flex',
      flexDirection:'row',
      justifyContent:'space-between'}}>

      <Text style={{
        marginTop:50,
        fontFamily:'outfit-bold',
        fontSize:35,
      }}>MyTrip</Text>
      <Ionicons style={{marginTop:50}} name="add-circle" size={50} color="black" />
      </View>
      <View style={{
        marginTop:50,
        alignItems:'center'
      }}>
      <Ionicons name="location" size={24} color="black" />
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:30
      }}>No trip planned yet</Text>
      <Text style={{
        fontFamily:'outfit',
        color:Colors.gray,
        fontSize:20,
        textAlign:'center'
      }}>Looks like its time to plan a new travel experince! Get started below</Text>
      </View>
      <TouchableOpacity 
      onPress={()=>router.push('/create-trip/search-place')}
      // onPress={()=>router.push('/create-trip/select-traveler')}
      style={{
        backgroundColor:Colors.black,
      borderRadius:15,
      padding:15,
      margin:50
      }}>
        <Text style= {{
          color:Colors.white,
          textAlign:'center',
          
        }}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}
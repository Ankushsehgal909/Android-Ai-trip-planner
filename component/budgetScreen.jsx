import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { Colors } from '../constants/Colors'
import { createTripContext } from '../context/createTripContext'
import { useRouter } from 'expo-router'

export default function BudgetScreen({option}) {
  const {tripData,setTripData}=useContext(createTripContext)
  const router =useRouter()
  
  const onBudgetSelect=()=>{
     setTripData({...tripData,
      budget:option.title
    });
    router.push('/create-trip/select-traveler')

  }

  return (
    <TouchableOpacity 
    onPress={onBudgetSelect}
    style={{
        padding:15,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        borderWidth:1,
        marginBottom:25,
        borderRadius:10

    }}>
      <View>
        <Text style={{
            fontSize: 25,
            fontFamily:'outfit-md'
        }}>{option.title}</Text>
        <Text style={{
            fontSize: 17,
            fontFamily:'outfit'}}>{option.desc}</Text>
      </View>
      <View>
        <Text style={{
            fontSize: 30,
            marginTop:15
            }}>{option.icon}</Text>
      </View>
    </TouchableOpacity>


  )
}
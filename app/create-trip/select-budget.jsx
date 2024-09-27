import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation } from 'expo-router'
import {SelelctBudgetOptions} from '../../constants/options'
import { Colors } from '../../constants/Colors'
import BudgetScreen from '../../component/budgetScreen'
import { createTripContext } from '../../context/createTripContext'

export default function selectBudget() {
    const navigation=useNavigation()
    useEffect(()=>{
      navigation.setOptions({
        headerShown:true,
        headerTransparent:true,
        headerTitle:''
      })
    })


  return (
    <View style={{
        marginTop:80,
        padding:15,
        display:'flex'
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:25,

      }}> What is  your budget</Text>
      <Text style={{
        fontFamily:'outfit',
        fontSize:20,
        marginTop:10,
        color:Colors.gray,
        marginBottom:30
      }}>Select budget</Text>
      

      <FlatList data={SelelctBudgetOptions}
      renderItem={({item,index})=>
        <View>
          <BudgetScreen option={item} />
        </View>
      } />
        </View>
  )
}
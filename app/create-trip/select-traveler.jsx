import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { SelelctTravelersList } from '../../constants/options'
import { Colors } from '../../constants/Colors'
import TravelerScreen from '../../component/travelerScreen'

export default function SelectTraveler() {
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

      }}> Who's Traveling</Text>
      <Text style={{
        fontFamily:'outfit',
        fontSize:20,
        marginTop:5,
        color:Colors.black,
        marginBottom:30
      }}>Choose your travelers</Text>
      

      <FlatList data={SelelctTravelersList}
      renderItem={({item,index})=>
        <View>
          <TravelerScreen option={item} />
        </View>
      } />
        </View>
  )
}
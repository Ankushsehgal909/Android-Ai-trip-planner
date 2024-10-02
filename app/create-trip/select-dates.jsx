import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import CalendarPicker from "react-native-calendar-picker";
import {Colors} from "../../constants/Colors"
import moment from 'moment'
import { createTripContext } from '../../context/createTripContext';
 
export default function SelectDates() {

  const {tripData,setTripData}=useContext(createTripContext)
  const [startDate, setStartDate]=useState()
  const [endDate, setEndDate]=useState()
  const router=useRouter();

  const navigation=useNavigation()
  useEffect(()=>{
    navigation.setOptions({
      headerShown:true,
      headerTransparent:true,
      headerTitle:''
    })
  },[])

  const onDateChange=(date,type)=>{
    if(type=='START_DATE'){
      setStartDate(moment(date))
    }
    else{
      setEndDate(moment(date))
    }
  }

  const onContinue=()=>{
    console.log(startDate)
    console.log(endDate)
    if(!startDate){
      ToastAndroid.show("please enter start and end date",ToastAndroid.SHORT)
      return;
    }
    else if(!endDate){
      ToastAndroid.show("please select end date",ToastAndroid.SHORT)
      return;
    }
    const days =endDate.diff(startDate,'days')
    setTripData({...tripData,
      totalDays:days+1
    });
    // console.log(tripData)
    router.push('/create-trip/trip-review')

    
  }
  return (
    <View style={{
      marginTop:80,
      padding:15,

  }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:25,
        marginBottom:20

      }}>Travel Dates</Text>
       <CalendarPicker 
       onDateChange={onDateChange}
       allowRangeSelection={true}
       minDate={new Date()}
       maxRangeDuration={5}
       selectedRangeStyle={{
        backgroundColor:Colors.black
       }}
       selectedDayTextStyle={{
        color:Colors.white
       }}
       />
       <TouchableOpacity 
       onPress={onContinue}
       style={{
        padding:15,
        backgroundColor:Colors.black,
        marginTop:35,
        borderRadius:15 
       }}>
        <Text style={{
          textAlign:'center',
          fontFamily:'outfit-md',
          fontSize:20,
          color:Colors.white
        }}>Continue</Text>
       </TouchableOpacity>
    </View>
  )
}
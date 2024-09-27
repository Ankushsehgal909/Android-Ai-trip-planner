import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import {createTripContext} from '../context/createTripContext'
import { useState } from "react";
export default function RootLayout() {

useFonts({
  "outfit":require('../assets/fonts/Outfit-Regular.ttf'),
  "outfit-md":require('../assets/fonts/Outfit-Medium.ttf'),
  "outfit-bold":require('../assets/fonts/Outfit-Bold.ttf')
})

const [tripData,setTripData]=useState([])
  return (
    <createTripContext.Provider value={{tripData,setTripData}}>

    <Stack screenOptions={{
      headerShown:false
    }}>
      {/* <Stack.Screen name="index" options={{
        headerShown:false
        }} /> */}
      <Stack.Screen name="(tabs)"/>
    </Stack>
        </createTripContext.Provider>
  );
}

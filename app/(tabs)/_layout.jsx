import { View, Text } from 'react-native'
import React from 'react'
import {Tabs} from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown:false,
      tabBarActiveTintColor:Colors.black
    }}>
      <Tabs.Screen options={{
        tabBarLabel: 'My Trip',
        tabBarIcon:({color})=><Ionicons name="location" size={24} color="black" />
      }} name="MyTrip"  />
      <Tabs.Screen options={{
   
        tabBarIcon:({color})=><Ionicons name="globe-sharp" size={24} color="black" />
      }} name="Discover"  />
      <Tabs.Screen options={{
      
        tabBarIcon:({color})=><Ionicons name="people-circle" size={24} color="black" />
      }} name="Profile"  />
    </Tabs>

  )
}
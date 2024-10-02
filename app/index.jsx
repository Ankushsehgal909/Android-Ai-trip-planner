import { Text, View } from "react-native";
import Login from '../component/Login.jsx'
import {auth} from '../config/FirebaseConfig.js'
import { Redirect, useRouter } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from "react";

export default function Index() {
  const user=auth.currentUser;
  const router=useRouter()
  // Check if a user session is stored in AsyncStorage
 useEffect(()=>{

  
    const checkUserSession = async() => {
      try {
          const userSession = await AsyncStorage.getItem('user');
          if (userSession) {
              // Redirect the user if a session exists
              
              router.replace('/MyTrip')
            
          }
      } catch (e) {
          console.error('Error checking user session:', e);
      }
  };
  
  checkUserSession();  
 },[])
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {
        user?<Redirect href={"/MyTrip"}/>:<Login/>
      }
      
      
    </View>
  );
}

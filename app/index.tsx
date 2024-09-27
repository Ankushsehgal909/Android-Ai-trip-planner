import { Text, View } from "react-native";
import Login from '../component/Login.jsx'
import {auth} from '../config/FirebaseConfig.js'
import { Redirect } from "expo-router";
export default function Index() {
  const user=auth.currentUser;
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

import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useReducer } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { createTripContext } from '../../context/createTripContext';

export default function TripReview() {
  const {tripData,setTripData}=useContext(createTripContext)
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: ''
    })
  })
  const router=useRouter()

  return (
    <View style={{
      padding: 25,
      marginTop: 50,
      
      height:'100%'
    }}>
      <Text style={{
        fontSize: 44,
        fontFamily: 'outfit-bold'
      }}>Review your trip</Text>
      <Text style={{
        fontSize: 20,
        fontFamily: 'outfit-md',
        marginBottom:10
      }}>Before generating your trip, please review your selection</Text>
      
      <View style={{
        display:'flex',
        borderWidth:2,
        borderRadius:10,
        paddingLeft:30
      }}>

      {/* destination */}
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        padding: 25,
        gap: 20
        
      }}>
        <Text style={{
          fontSize: 24,
          marginTop:10
        }}>📍</Text>
        <View>
          <Text style={{
            fontSize: 20,
            fontFamily: 'outfit-md',
          }}>Destination</Text>
          <Text style={{
            fontSize: 20,
            fontFamily: 'outfit-md',
          }}>{tripData.location}</Text>
        </View>
      </View>
      {/* travelers */}
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        padding: 25,
        gap: 20
      }}>
        <Text style={{
          fontSize: 24,
          marginTop:10
        }}>🚙</Text>
        <View>
          <Text style={{
            fontSize: 20,
            fontFamily: 'outfit-md',
          }}>Who is Traveling</Text>
          <Text style={{
            fontSize: 20,
            fontFamily: 'outfit-md',
          }}>{tripData.traveler}</Text>
        </View>
      </View>
      {/* Total days */}
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        padding: 25,
        gap: 20
      }}>
        <Text style={{
          fontSize: 24,
          marginTop:10
        }}>📆</Text>
        <View>
          <Text style={{
            fontSize: 20,
            fontFamily: 'outfit-md',
          }}>Total Days</Text>
          <Text style={{
            fontSize: 20,
            fontFamily: 'outfit-md',
          }}>{tripData.totalDays} Days</Text>
        </View>
      </View>
      {/* Budget */}
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        padding: 25,
        gap: 20
      }}>
        <Text style={{
          fontSize: 24,
          marginTop:10
        }}>💰</Text>
        <View>
          <Text style={{
            fontSize: 20,
            fontFamily: 'outfit-md',
          }}>Budget</Text>
          <Text style={{
            fontSize: 20,
            fontFamily: 'outfit-md',
          }}>{tripData.budget}</Text>
        </View>
      </View>
          </View>
          <TouchableOpacity 
       onPress={()=>router.replace('/create-trip/loading')}
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
        }}>Build Trip</Text>
       </TouchableOpacity>
    </View>
  )
}
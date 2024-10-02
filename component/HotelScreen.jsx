// import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
// import React from 'react'
// import {Colors} from "../constants/Colors"

// export default function HotelScreen({hotel}) {
//   return (
//     <View style={{
//       width:200,
//       margin:12
//     }}>
    
//     <Image 
//     style={{
//       height:170,
//       width:200,
//       borderTopLeftRadius:10,
//       borderTopRightRadius:10,
//     }}
//     source={require('../assets/images/hotel.jpg')}/>
//     <View style={{
//       marginLeft:4
//     }}>
//       <Text style={{
//         fontSize: 17,
//         fontFamily:'outfit-md'
//       }}>{hotel.name}</Text>
//       <Text style={{
//         fontFamily:'outfit-md',
//         color:Colors.gray
//       }}>Price: {hotel.price}</Text>
//       <Text style={{
//         fontFamily:'outfit'
//       }}>Rating: {hotel.rating}</Text>
//     </View>
//   </View>
//   )
// }
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Colors } from "../constants/Colors";

export default function   
 HotelScreen({ hotel }) {
  return (
    <TouchableOpacity style={styles.hotelContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/hotel.jpg')} // Replace with your actual image
          style={styles.hotelImage}
        />
      </View>
      <View style={styles.hotelDetails}>
        <Text style={styles.hotelName}>{hotel.name}</Text>
        <View >
          <Text style={styles.hotelPrice}>Price: {hotel.price}</Text>
          <Text style={styles.hotelRating}>Rating: {hotel.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  hotelContainer: {
    width: 200,
    margin: 12,
    backgroundColor: Colors.white,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    backgroundColor:Colors.white
  },
  imageContainer: {
    borderRadius: 10,
    overflow: 'hidden', // Prevent image overflow
  },
  hotelImage: {
    height: 150,
    width: '100%',
    resizeMode: 'cover', // Stretch image to fill container
  },
  hotelDetails: {
    padding: 10,
  },
  hotelName: {
    fontSize: 17,
    fontFamily: 'outfit-md',
    marginBottom: 5,
  },

  hotelPrice: {
    fontFamily: 'outfit-md',
    color: Colors.gray,
  },
  hotelRating: {
    fontFamily: 'outfit',
  },
});
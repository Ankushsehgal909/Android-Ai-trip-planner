// import React from 'react';
// import { View, Text, StyleSheet, FlatList } from 'react-native';
// import { Colors } from '../constants/Colors';

// const PlanScreen = ({ tripData }) => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerText}>{tripData.day}</Text>
//       </View>
//       <FlatList
//         data={tripData.plan}
//         renderItem={({ item }) => (
//           <View style={styles.itemContainer}>
//             <Text style={styles.travelTime}>Time to travel: <Text style={styles.highlightText}>{item.time}</Text></Text>
//             <Text style={styles.itemText}>
//               <Text style={styles.boldText}>Place: </Text>{item.place}
//             </Text>
//             <Text style={styles.itemText}>
//               <Text style={styles.boldText}>Activity: </Text>{item.details}
//             </Text>
//             <Text style={styles.itemText}>
//               <Text style={styles.boldText}>Ticket Price: </Text><Text style={styles.highlightText}>{item.ticket_pricing}</Text>
//             </Text>
//             <View style={styles.separator}></View>
//           </View>
//         )}
//         // keyExtractor={(item) => item.id.toString()} // Ensure your data has a unique id
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.white,
//     padding: 10,
//   },
//   header: {
//     borderWidth: 1,
//     borderColor: Colors.black,
//     height: 100,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: Colors.black,
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   headerText: {
//     fontSize: 28,
//     fontFamily: 'outfit-bold',
//     color: Colors.white,
//     textTransform: 'uppercase',
//   },
//   itemContainer: {
//     padding: 20,
//     backgroundColor: Colors.lightGray,
//     borderRadius: 12,
//     marginBottom: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
//     elevation: 3,
//     borderLeftWidth: 5,
//     borderLeftColor: Colors.primary, // Highlight border
//   },
//   travelTime: {
//     fontSize: 16,
//     fontFamily: 'outfit-bold',
//     color: Colors.gray,
//     marginBottom: 5,
//   },
//   itemText: {
//     fontSize: 16,
//     fontFamily: 'outfit-md',
//     marginBottom: 5,
//   },
//   boldText: {
//     fontFamily: 'outfit-bold',
//     color: Colors.darkGray,
//   },
//   highlightText: {
//     fontFamily: 'outfit-bold',
//     color: Colors.secondary, // Highlighted text color
//   },
//   separator: {
//     height: 1,
//     backgroundColor: Colors.gray,
//     marginTop: 10,
//     opacity: 0.5,
//   },
// });

// export default PlanScreen;


import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { Colors } from '../constants/Colors';   
 // Assuming Colors is an object with color constants

const PlanScreen = ({ tripData }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Add a background image (replace with your image URL) */}
        <Image
          source={require('.././assets/images/itinerary.webp')}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>{tripData.day}</Text>
      </View>
      <FlatList
        data={tripData.plan}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            {item.image && ( // Conditionally render an image if available
              <Image source={{ uri: item.image }} style={styles.itemImage} />
            )}
            <View style={styles.itemDetails}>
              <Text style={styles.travelTime}>
                Time to travel: <Text style={styles.highlightText}>{item.time}</Text>
              </Text>
              <Text style={styles.itemText}>
                <Text style={styles.boldText}>Place: </Text>
                {item.place}
              </Text>
              <Text style={styles.itemText}>
                <Text style={styles.boldText}>Activity: </Text>
                {item.details}
              </Text>
              <Text style={styles.itemText}>
                <Text style={styles.boldText}>Ticket Price: </Text>
                <Text style={styles.highlightText}>{item.ticket_pricing}</Text>
              </Text>
            </View>
          </View>
        )}
        // keyExtractor={(item) => item.id.toString()} // Ensure unique key
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 10,
  },
  header: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    overflow: 'hidden', // Prevent image overflow
  },
  headerImage: {
    position: 'absolute', // Place image behind text
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  headerText: {
    fontSize: 28,
    fontFamily: 'outfit-bold',
    color: Colors.white,
    textTransform: 'uppercase',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Add transparent background
    paddingHorizontal: 10,
  },
  itemContainer: {
    backgroundColor: Colors.white,
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    flexDirection: 'row', // Arrange image and details side-by-side
  },
  itemImage: {
    width: 80,
    height: 80,
    marginRight: 15,
    borderRadius: 10,
  },
  itemDetails: {
    flex: 1, // Allow details to fill remaining space
  },
  travelTime: {
    fontSize: 16,
    fontFamily: 'outfit-bold',
    color: Colors.gray,
    marginBottom: 5,
  },
  itemText: {
    fontSize: 16,
    fontFamily: 'outfit-md',
    marginBottom: 5,
  },
  boldText: {
    fontFamily: 'outfit-bold',
    color: Colors.darkGray,
  },
  highlightText: {
    fontFamily: 'outfit-bold',
    color: Colors.secondary,
  }
})
export default PlanScreen;
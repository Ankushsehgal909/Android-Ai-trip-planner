import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, ScrollView } from 'react-native';
import HotelScreen from '../../component/HotelScreen';
import PlanScreen from '../../component/PlanScreen';
import { Colors } from '../../constants/Colors';

export default function TripDetailScreen() {
  const [results, setResults] = useState(); // Initialize state as null
  const router = useRouter();

  useEffect(() => {
    const fetchResults = async () => {
      const storedResults = await AsyncStorage.getItem('tripResults');
      if (storedResults) {
        const data = JSON.parse(storedResults);
        setResults(data); // Update state
        console.log('Data fetched and state updated:', storedResults); // Log after state update
      }
    };

    fetchResults();
  }, []);

  if (!results) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading trip details...</Text>
      </View>
    ); // Handle case where results haven't loaded yet
  }

  return (
     <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/images/main.jpg')} style={styles.tripImage} />
      </View>
      <Text style={styles.headerText}>Your Trip Plan Awaits</Text>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Recommended Hotels</Text>

        {/* Render the FlatList only when results exist */} 
        <FlatList
        style={{
        }}
          data={results.hotels}
          scroll
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <HotelScreen  hotel={item} />

          )}
          keyExtractor={(item, index) => index.toString()} // Use index as key if no unique id is present
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Itinerary Plan</Text>

        {/* Render the FlatList only when results exist */}
         <FlatList
        
          data={results.itinerary}
          scroll
          renderItem={({ item }) => (
            // <PlanScreen/>
            <PlanScreen tripData={item}/>
          )}
          keyExtractor={(item, index) => index.toString()} // Use index as key if no unique id is present
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily:'outfit-md',
    backgroundColor:Colors.white
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  tripImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius:10,
    borderTopRightRadius:10
  },
  headerText: {
    fontSize: 24,
    fontFamily: 'outfit-bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 20,
    fontFamily: 'outfit-md',
    marginLeft:10
    
  }
});
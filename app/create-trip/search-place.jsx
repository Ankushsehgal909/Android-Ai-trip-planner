// AddressAutocomplete.js

import React, { useContext, useEffect, useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';
import {useNavigation, useRouter} from 'expo-router'
import axios from 'axios';
import { createTripContext } from '../../context/createTripContext';


const API_KEY = '8ae9ae02f08b4316b32bb514c4c6d391';

const AddressAutocomplete = () => {
  const {tripData,setTripData}=useContext(createTripContext)
  const [suggestions, setSuggestions] = useState([]);

  const router=useRouter();

  const navigation=useNavigation()
  useEffect(()=>{
    navigation.setOptions({
      headerShown:true,
      headerTransparent:true,
      headerTitle:'Search'
    })
  })


  const fetchSuggestions = async (input) => {
    if (input.length < 3) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await axios.get(`https://api.geoapify.com/v1/geocode/autocomplete`, {
        params: {
          text: input,
          apiKey: API_KEY,
        },
      });

      setSuggestions(response.data.features);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (input) => {
    // setQuery(input);
    fetchSuggestions(input);
  };

  const handleSelect = async(address) => {

   await setTripData({location:address.properties.formatted});
    setSuggestions([]);
    router.push('/create-trip/select-budget')

    
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
       
        onChangeText={handleChange}
        placeholder="Enter address"
      />
      <FlatList
        data={suggestions}
        keyExtractor={(item) => item.properties.geocodable_id}
        renderItem={({ item }) => (
          <Text style={styles.suggestion} onPress={() => handleSelect(item)}>
            {item.properties.formatted}
          </Text>
        )}
        style={styles.suggestionsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    margin: 20,
  },
  input: {
    height: 40,
    marginTop:50,
    borderRadius:10,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  suggestionsList: {
    marginTop: 10,
  },
  suggestion: {
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
});

export default AddressAutocomplete;

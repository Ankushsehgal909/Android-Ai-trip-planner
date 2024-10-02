import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { useNavigation } from 'expo-router';
import { SelelctBudgetOptions } from '../../constants/options';
import { Colors } from '../../constants/Colors';
import BudgetScreen from '../../component/budgetScreen';
import { createTripContext } from '../../context/createTripContext';

export default function SelectBudget() {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ''
        });
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>What is your budget?</Text>
            <Text style={styles.subtitle}>Select budget</Text>

            <FlatList 
                data={SelelctBudgetOptions}
                renderItem={({ item }) => (
                    <View>
                        <BudgetScreen option={item} />
                    </View>
                )}
                keyExtractor={(item) => item.id} // Assuming each option has a unique 'id'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 80,
        padding: 15,
        flex: 1,
        backgroundColor: Colors.lightBackground, // Add a background color
    },
    title: {
        fontFamily: 'outfit-bold',
        fontSize: 30,
        color: Colors.primary, // Customize color for the title
        textAlign: 'center', // Center the title
        marginBottom: 10,
    },
    subtitle: {
        fontFamily: 'outfit',
        fontSize: 20,
        marginTop: 10,
        color: Colors.gray,
        marginBottom: 30,
        textAlign: 'center', // Center the subtitle
    },
});

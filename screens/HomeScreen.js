import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Find Your Dream Job</Text>
            <Button
                title="Search Jobs"
                onPress={() => navigation.navigate('Search')}
            />
        </View>
    );
};

export default HomeScreen;
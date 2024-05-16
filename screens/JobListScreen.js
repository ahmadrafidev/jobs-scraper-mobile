// screens/JobListScreen.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';

const JobListScreen = ({ route }) => {
    const { query } = route.params;

    const jobs = [
        { id: '1', title: 'Software Developer', company: 'Tech Inc' }
    ];

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Search Query: {query}</Text>
            <FlatList
                data={jobs}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.title}</Text>
                        <Text>{item.company}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default JobListScreen;
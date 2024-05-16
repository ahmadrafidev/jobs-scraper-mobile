import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';

const JobList = ({ jobs, navigation }) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('JobDetails', { jobId: item.id })}>
            <Text>{item.title}</Text>
            <Text>{item.company}</Text>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={jobs}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
        />
    );
};

export default JobList;
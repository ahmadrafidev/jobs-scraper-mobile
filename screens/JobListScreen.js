import React from 'react';
import { FlatList, View } from 'react-native';
import JobItem from './JobItem';

const jobs = [
    { id: '1', title: 'Software Developer', company: 'Tech Solutions', location: 'San Francisco, CA' },
    { id: '2', title: 'Web Designer', company: 'Creative Studios', location: 'New York, NY' },
];

const JobListScreen = ({ navigation }) => {
    const handlePressJob = (job) => {
        navigation.navigate('JobDetails', { job });
    };

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={jobs}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <JobItem 
                        job={item} 
                        onPress={() => handlePressJob(item)}
                    />
                )}
            />
        </View>
    );
};

export default JobListScreen;
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const JobItem = ({ job, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.title}>{job.title}</Text>
            <View style={styles.details}>
                <Text style={styles.company}>{job.company}</Text>
                <Text style={styles.location}>{job.location}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 5,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    details: {
        marginTop: 5,
    },
    company: {
        fontSize: 14,
        color: '#666',
    },
    location: {
        fontSize: 14,
        color: '#666',
    },
});

export default JobItem;
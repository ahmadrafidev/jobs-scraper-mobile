import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const JobDetailsScreen = ({ route }) => {
    const { jobId } = route.params;
    const [job, setJob] = useState(null);

    useEffect(() => {
        // Mock data for job details
        const mockJobDetails = {
            id: jobId,
            title: "Senior Software Engineer",
            company: "Tech Corp",
            location: "Jakarta, Indonesia",
            date_posted: "2024-05-01",
            description: "We are looking for a Senior Software Engineer with 5+ years of experience in full stack development.",
            requirements: "Proficient in React, Node.js, and MongoDB. Experience with cloud services like AWS or GCP is a plus.",
            job_link: "https://techcorp.jobs/apply/123456"
        };

        // Simulate API call
        setTimeout(() => {
            setJob(mockJobDetails);
        }, 1000);
    }, [jobId]);

    if (!job) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{job.title}</Text>
            <Text style={{ fontSize: 18, marginVertical: 10 }}>{job.company}</Text>
            <Text style={{ fontSize: 16, color: 'gray' }}>{job.location}</Text>
            <Text style={{ fontSize: 16, marginVertical: 10 }}>{job.date_posted}</Text>
            <Text style={{ fontSize: 16, marginVertical: 10 }}>{job.description}</Text>
            <Text style={{ fontSize: 16, marginVertical: 10 }}>{job.requirements}</Text>
            <Text style={{ fontSize: 16, color: 'blue' }} onPress={() => {
            }}>Apply Here: {job.job_link}</Text>
        </View>
    );
};

export default JobDetailsScreen;

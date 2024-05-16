// AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import JobListScreen from './screen/JobListScreen'; 
import JobDetailsScreen from './screens/JobDetailsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{ title: 'Welcome' }}
                />
                <Stack.Screen 
                    name="Search" 
                    component={SearchScreen} 
                    options={{ title: 'Search Jobs' }}
                />
                <Stack.Screen 
                    name="JobList" 
                    component={JobListScreen} 
                    options={{ title: 'Job Listings' }}
                />
                <Stack.Screen 
                    name="JobDetails" 
                    component={JobDetailsScreen} 
                    options={({ route }) => ({ title: route.params.title })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;

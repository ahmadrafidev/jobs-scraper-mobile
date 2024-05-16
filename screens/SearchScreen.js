// SearchScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const SearchScreen = ({ navigation }) => {
    const [query, setQuery] = useState('');

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
                onChangeText={setQuery}
                value={query}
                placeholder="Type a job title or keyword"
            />
            <Button
                title="Search"
                onPress={() => navigation.navigate('JobList', { query })}
            />
        </View>
    );
};

export default SearchScreen;
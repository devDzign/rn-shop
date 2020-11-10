import React from 'react';

import { Text, View, StyleSheet } from 'react-native';

const StarScreen = () => {
    return (
        <View>
            <Text style={styles.title}>
                Star Screen is work
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,

    }
});

export default StarScreen;

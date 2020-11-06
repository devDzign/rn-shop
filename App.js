import * as Font from 'expo-font';
import { AppLoading } from "expo";

import React, { useState } from 'react';
import { StyleSheet, View, Text } from "react-native"
import StarScreen from "./src/screens/start.screen";
import {  } from "react-native-web";

const fetchFonts = () => {
    return Font.loadAsync({
            'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
            'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
        }
    )
}

export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false);

    if (!fontLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setFontLoaded(true)}
            />
        );
    }

    return (
        <View style={styles.container}>
            <StarScreen/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

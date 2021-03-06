import 'react-native-gesture-handler';
import * as Font from 'expo-font';
import { AppLoading } from "expo";

import React, { useState } from 'react';
import { StyleSheet, View } from "react-native"

import { Provider } from "react-redux";
import { store } from "./src/store/store";

import ProductsOverviewScreen from "./src/screens/shop/products-overview.screen";
import RootNavigator from "./src/navigation/root.navigator";

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
        <Provider store={store}>
            <RootNavigator />
        </Provider>

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

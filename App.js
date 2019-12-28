import React from 'react';
import {StyleSheet} from 'react-native';
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import LoadingScreen from "./screens/LoadingScreen";
import HomeScreen from "./screens/HomeScreen";
import {Provider as PaperProvider} from 'react-native-paper';

const AppSwitchNavigator = createSwitchNavigator({
    HomeScreen: HomeScreen,
    LoadingScreen: LoadingScreen,
});
const AppNavigator = createAppContainer(AppSwitchNavigator);
export default function App() {
    return (
        <PaperProvider>
            <AppNavigator/>
        </PaperProvider>
    )
};


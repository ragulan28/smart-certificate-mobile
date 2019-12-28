import React, {Component} from "react";
import {ActivityIndicator, StyleSheet, View} from "react-native";

class LoadingScreen extends Component {


    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large"/>
            </View>
        );
    }
}

export default LoadingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

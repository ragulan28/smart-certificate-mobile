import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";


class QrTab extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>QrTab</Text>
            </View>
        );
    }
}

export default QrTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

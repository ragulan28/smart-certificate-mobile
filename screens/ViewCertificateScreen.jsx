import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";

class ViewCertificateScreen extends Component {


    render() {
        return (
            <View style={styles.container}>
                <Text>ViewCertificateScreen</Text>
            </View>
        );
    }
}

export default ViewCertificateScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

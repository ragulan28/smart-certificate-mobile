import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";


class ProfileTab extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Profile tab</Text>
            </View>
        );
    }
}

export default ProfileTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

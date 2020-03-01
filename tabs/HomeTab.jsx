import React, {Component} from "react";
import {StyleSheet, Text, View,Image} from "react-native";


class HomeTab extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={{paddingTop: 20}}>
                    <View style={styles.viewField}>
                        <Text style={styles.field}>
                            <Text style={styles.title}>Name</Text> : {"ragulan"}
                        </Text>
                    </View>
                    <View style={styles.viewField}>
                        <Text style={styles.field}>
                            <Text style={styles.title}>Data of birth</Text> : {"28/08/1994"}
                        </Text>
                    </View>
                    <View style={styles.viewField}>
                        <Text style={styles.field}>
                            <Text style={styles.title}>Place of birth</Text> : {"Anuradhapura"}
                        </Text>
                    </View>
                    <View style={styles.viewField}>
                        <Text style={styles.field}>
                            <Text style={styles.title}>Gender</Text> : {"male"}
                        </Text>
                    </View>
                    <View style={styles.viewField}>
                        <Text style={styles.field}>
                            <Text style={styles.title}>Father's name</Text> : {"adham"}
                        </Text>
                    </View>
                    <View style={styles.viewField}>
                        <Text style={styles.field}>
                            <Text style={styles.title}>Mother's name</Text> : {"adham"}
                        </Text>
                    </View>

                    <Image source={require('../assets/images/Screenshot.png')}/>
                </View>
            </View>
        );
    }
}

export default HomeTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewField: {
        borderBottomWidth: 2,
        borderBottomColor: '#3F51B5',
        paddingBottom: 10,
        marginBottom: 5
    },
    field: {
        fontSize: 20,
    },
    title: {
        fontWeight: 'bold',
        color: '#000000',
        paddingRight: 40
    }
});

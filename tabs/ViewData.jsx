import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default function ViewData({myData}) {

    return (
        <View style={{paddingTop:20}}>
            <View style={styles.viewField}>
                <Text style={styles.field}>
                    <Text style={styles.title}>Name</Text> : {myData.name}
                </Text>
            </View>
            <View style={styles.viewField}>
                <Text style={styles.field}>
                    <Text style={styles.title}>Data of birth</Text> : {myData.birthDate}
                </Text>
            </View>
            <View style={styles.viewField}>
                <Text style={styles.field}>
                    <Text style={styles.title}>Place of birth</Text> : {myData.placeOfBirth}
                </Text>
            </View>
            <View style={styles.viewField}>
                <Text style={styles.field}>
                    <Text style={styles.title}>Gender</Text> : {myData.gender}
                </Text>
            </View>
            <View style={styles.viewField}>
                <Text style={styles.field}>
                    <Text style={styles.title}>Father's name</Text> : {myData.father.name}
                </Text>
            </View>
            <View style={styles.viewField}>
                <Text style={styles.field}>
                    <Text style={styles.title}>Mother's name</Text> : {myData.mother.name}
                </Text>
            </View>

        </View>


    );
}
const styles = StyleSheet.create({
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

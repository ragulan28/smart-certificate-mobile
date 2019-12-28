import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import abiDecoder from 'abi-decoder'

global.abiDecoder = abiDecoder;


export default function ViewData({myData}) {
    const [blockData, setBlockData] = useState({});
    const [valid, setValid] = useState({});

    const validateCertificate = () => {
        const ABI = require("../assets/CertificateList");
        abiDecoder.addABI(ABI);
        // console.log(myData.transaction.hash);
        fetch('https://api-ropsten.etherscan.io/api?module=proxy&action=eth_getTransactionReceipt&txhash=' + myData.transaction.hash + '&apikey=4P85C5ZDS7RHFJHFGA98CJFT49E8TP4PZA', {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson.result);
                const log = abiDecoder.decodeLogs(responseJson.result.logs)[0].events;
                setBlockData({
                    "id": log[0].value,
                    "certificateType": log[1].value,
                    "hash": log[2].value
                });
                valideteHash();
            })
            .catch((error) => {
                console.error(error);
            });
    };
    const valideteHash = () => {
        const dataForHash = {
            id: myData.id,
            name: myData.name,
            birthDate: myData.birthDate,
            placeOfBirth: myData.placeOfBirth,
            gender: myData.gender,
            father: myData.father,
            mother: myData.mother
        };
        const ObjectHash = require('object-hash');
        const hash = ObjectHash(JSON.stringify(dataForHash));
        console.log(JSON.stringify(dataForHash));
        if (hash === blockData.hash) {
            alert("Valid");
        } else {
            alert("Invalid");
        }
    }

    return (
        <View style={{paddingTop: 20}}>
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
            <Button title={'Validate'} onPress={validateCertificate}/>
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

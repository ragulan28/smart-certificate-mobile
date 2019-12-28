import React, {useEffect, useState} from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';

export default function QrTab() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [modelVisible, setModelVisible] = useState(false);
    useEffect(() => {
        (async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({type, data}) => {
        setScanned(true);
        setModelVisible(true)
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
            }}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />

            {scanned && (
                <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)}/>
            )}
            <Modal animationType={"slide"} transparent={false}
                   visible={modelVisible}>
                <View style={styles.modal}>
                    <Text style={styles.text}>Modal is open!</Text>
                    <Button title="Click To Close Modal" onPress={() => {
                        setModelVisible(false)
                        setScanned(false);
                    }}/>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#a0a2be',
        padding: 100
    },
    text: {
        color: '#000000',
        marginTop: 10
    }
});

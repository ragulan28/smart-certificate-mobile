import React, {useEffect, useState} from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
import ViewData from "./ViewData";

export default function QrTab() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [certificateData, setCertificateData] = useState({});
    const [modelVisible, setModelVisible] = useState(false);
    useEffect(() => {
        (async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({type, data}) => {
        setScanned(true);
        setModelVisible(true);
        const obj = JSON.parse(data);
        setCertificateData(obj);
        console.log(certificateData)
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
                    <Button title="close" onPress={() => {
                        setModelVisible(false)
                        setScanned(false);
                        setCertificateData({});
                    }}/>
                    <ViewData myData={certificateData}/>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: '#e4eafb',
        padding: 50
    },
    text: {
        color: '#000000',
        marginTop: 10
    }
});

import React, {Component} from "react";
import {StyleSheet} from "react-native";
import HomeTab from "../tabs/HomeTab";
import QrTab from "../tabs/QrTab";
import ProfileTab from "../tabs/ProfileTab";
import {BottomNavigation} from 'react-native-paper';
import {FontAwesome5} from "@expo/vector-icons";

class HomeScreen extends Component {
    state = {
        index: 2,
        routes: [
            {key: 'scan', title: 'Scan', icon: 'qrcode'},
            {key: 'home', title: 'My', icon: 'file-document-box-outline'},
            {key: 'profile', title: 'Profile', icon: 'account-outline'},
        ],
    };
    _renderScene = BottomNavigation.SceneMap({
        home: HomeTab,
        scan: QrTab,
        profile: ProfileTab,
    });
    _handleIndexChange = index => this.setState({index});
    renderIcon = icon => ({ isActive }) => (
        <FontAwesome5 size={24} color="white" name={icon} />
    )
    render() {
        return (
            <BottomNavigation
                inactiveColor={"#999cb5"}
                activeColor={"#3F51B5"}
                barStyle={{
                    backgroundColor: "white",
                    borderTopColor: "#3F51B5",
                    borderTopWidth: 3,
                }}
                navigationState={this.state}
                onIndexChange={this._handleIndexChange}
                renderScene={this._renderScene}
            />
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#fbf2e3",
        paddingTop: 50,

    },
});

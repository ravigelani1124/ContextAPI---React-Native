import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { MyContext } from "../context/MyProvider";


export const profileDataTemp = () => React.useContext(MyContext);

const HomeScreen = () => {

    const navigation = useNavigation();

    const editProfile = () => {
        navigation.navigate('Edit Profile');
    }

    const { profileData, setProfileData } = profileDataTemp()!;

    return (
        <View style={styles.container} >
            <Text style={styles.textStyle}>First Name : {profileData.fName}</Text>
            <Text style={styles.textStyle}>Last Name :{profileData.lName} </Text>
            <Text style={styles.textStyle}>Mobile Number : {profileData.mobileNumber}</Text>
            <Text style={styles.textStyle}>Email Adress : {profileData.email}</Text>
            <Text style={styles.textStyle}>Age : {profileData.age} </Text>
            <View style={styles.btnMargin}>
                <Button title="Edit Profile" onPress={() => editProfile()} />
            </View>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({

    textStyle: {
        fontSize: 15,
        color: '#000000',
        marginTop: 7,
        marginBottom: 7,
        marginLeft: 5,
        marginRight: 5,
        borderWidth: 1,
        padding: 10,
        borderRadius: 3
    },
    btnMargin: {
        marginTop: 20,
    },
    container: {
        flex: 1,
        margin: 15
    }
});
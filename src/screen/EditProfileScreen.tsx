import React, { useState } from "react";
import { Button, ScrollView, ScrollViewBase, StyleSheet, Text, TextInput, View } from "react-native";
import { MyContext } from "../context/MyProvider";
import { useNavigation } from "@react-navigation/core";
import { ProfileData } from "../model/model";


const profileDataTemp = () => React.useContext(MyContext)

const EditProfileScreen = () => {

    const navigation = useNavigation();

    const { profileData, setProfileData } = profileDataTemp()!;

    const [fName, setFName] = React.useState<string>(profileData.fName.toString());
    const [lName, setLName] = React.useState<string>(profileData.lName.toString());
    const [mobilNumber, setMobileNumber] = React.useState<string>(profileData.mobileNumber.toString());
    const [email, setEmail] = React.useState<string>(profileData.email.toString());
    const [age, setAge] = React.useState<string>(profileData.age.toString());

    const goBackAndSaveData = () => {

        let profileData: ProfileData = {
            fName: fName,
            lName: lName,
            mobileNumber: mobilNumber,
            email: email,
            age: age
        }
        setProfileData(profileData)
        navigation.goBack();
    }

    return (

        <ScrollView style={styles.container}>

            <TextInput style={styles.input} value={fName} placeholder={'First Name'} onChangeText={text => {
                setFName(text);
            }} />

            <TextInput style={styles.input} value={lName} placeholder={'Last Name'} onChangeText={text => {
                setLName(text);
            }} />

            <TextInput style={styles.input} value={mobilNumber} keyboardType="numeric" placeholder={'Mobile Number'} onChangeText={text => {
                setMobileNumber(text);
            }} />

            <TextInput style={styles.input} value={email} placeholder={'Email'} onChangeText={text => {
                setEmail(text);
            }} />

            <TextInput style={styles.input} value={age} keyboardType="numeric" placeholder={'Age'} onChangeText={text => {
                setAge(text);
            }} />

            <Button title="Save Profile" onPress={() => goBackAndSaveData()} />

        </ScrollView>
    )
}



export default EditProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})
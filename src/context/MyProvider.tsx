import React, { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProfileData } from "../model/model";


//custom context type

type AppContextType = {
    profileData: ProfileData;
    setProfileData: (obj: ProfileData) => void
}

//Create context
export const MyContext = React.createContext<AppContextType | undefined>(undefined,);

//Assign Default Data------------------------------------------------

const defaultProfile: ProfileData = { fName: '', lName: '', mobileNumber: '', email: '', age: '' }

type Props = {
    children: React.ReactNode
}

export const MyProvider = ({ children }: Props) => {

    const [profileData, setProfileData] = React.useState(defaultProfile)

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <MyContext.Provider value={{ profileData, setProfileData }} >
                {children}
            </MyContext.Provider>

        </SafeAreaView>
    );
}
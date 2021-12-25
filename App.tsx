import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import EditProfileScreen from './src/screen/EditProfileScreen';
import { MyProvider } from './src/context/MyProvider';

const Stack = createNativeStackNavigator();

const App = () => {
  return (

    <MyProvider>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Edit Profile" component={EditProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </MyProvider>)
}

export default App;


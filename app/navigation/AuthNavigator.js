import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreeen from "../screens/WelcomeScreeen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name = "welcome" component = {WelcomeScreeen} options = {{headerShown: false}}/>
        <Stack.Screen name = "Login" component = {LoginScreen}/>
        <Stack.Screen name = "Register" component = {RegisterScreen}/>
    </Stack.Navigator>
);

export default AuthNavigator
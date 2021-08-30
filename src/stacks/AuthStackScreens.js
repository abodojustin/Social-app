import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";

export default function AuthStackScreens() {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen name="Signup" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
}
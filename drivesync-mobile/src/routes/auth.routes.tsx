import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../screens/Login';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen 
      name="Login" 
      component={SignIn} 
    />
  </AuthStack.Navigator>
);

export default AuthRoutes;

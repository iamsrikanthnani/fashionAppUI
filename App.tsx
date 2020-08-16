import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';

import {AppRoutes} from './src/components/Navigation';

import {theme} from './src/components/Theme';
import {AuthenticationNavigator} from './src/Authentication';
import Home from './src/Home';
const Stack = createStackNavigator<AppRoutes>();

export default function App() {
  return (
    <ThemeProvider {...{theme}}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator headerMode="none">
            <Stack.Screen
              name="Authentication"
              component={AuthenticationNavigator}
            />
            <Stack.Screen
              name="Home"
              component={Home}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>   s
    </ThemeProvider>
  );
}

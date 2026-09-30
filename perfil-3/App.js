import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
 
import { Home } from './src/screens/Home';
import { ApiScreen } from './src/screens/ApiScreen';

SplashScreen.preventAutoHideAsync();
 
const Stack = createNativeStackNavigator();
 
export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
 
  useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2500));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
 
    prepare();
  }, []);
 
  useEffect(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);
 
  if (!appIsReady) {
    return null;
  }
 
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#0066cc' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Presentación' }}
        />
        <Stack.Screen
          name="ApiData"
          component={ApiScreen}
          options={{ title: 'Listado API' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
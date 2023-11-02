import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Appearance, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Appbar, Avatar, DefaultTheme, Divider, FAB, List, MD3DarkTheme, Provider as PaperProvider, Portal } from 'react-native-paper';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './screens/HomeScreen';
import WeatherScreen from './screens/WeatherScreen';
import MyContext from './store';

const Stack = createNativeStackNavigator();

export default function App() {
  const [theme, setTheme] = useState(Appearance.getColorScheme());

  return (
    <MyContext.Provider value={{ theme, setTheme }}>
      <PaperProvider theme={theme == "dark" ? MD3DarkTheme : DefaultTheme}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Weather' component={WeatherScreen} />

          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </MyContext.Provider>
  );
}

const styles = StyleSheet.create({
});

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, View } from 'react-native';
import { ThemeProvider } from './components/ThemeContext';

import HomeScreen from './components/HomeScreen';
import Settings from './components/Settings';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ThemeProvider>
    <NavigationContainer>
      <Tab.Navigator
      
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = require('./assets/home.png');
            } else if (route.name === 'My Cards') {
              iconName = require('./assets/myCards.png');
            } else if (route.name === 'Statitics') {
              iconName = require('./assets/statictics.png');
            } else if (route.name === 'Settings') {
              iconName = require('./assets/settings.png');
            }

            return <Image source={iconName} style={{ width: 24, height: 24 }} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            display: 'flex',
          },
        })}
      >
    

        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="My Cards" component={Settings} />
        <Tab.Screen name="Statistics" component={Settings} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;

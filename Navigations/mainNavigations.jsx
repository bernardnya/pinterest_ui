import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from '../Screens/Homescreen';
import Detailscreen from '../Screens/DetailsScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import CreatePins from '../Screens/CreatePinScreen';

const Stack = createStackNavigator();

const MainNavigation = () =>{
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Homescreen} />
      <Stack.Screen name="Details" component={Detailscreen} options={{headerShown:false}}/>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Create" component={CreatePins} />


    </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainNavigation;
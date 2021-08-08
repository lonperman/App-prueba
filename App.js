import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Avatar } from 'react-native-paper';


import HomeScreen from './screens/HomeScreen';
import UserInfoScreen from './screens/UserInfoScreen';


const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="HomeScreen"
          component={HomeScreen}
          options={() => ({
            title: 'Users',
            headerStyle: {backgroundColor: '#778899'},
            headerTitleStyle: { color: '#fff'},
            headerRight: () => (
              <Avatar.Icon style={{backgroundColor:'#000', marginRight: 20}}  size={40} icon='account'  />
            ),   
          })}
        />
        <Stack.Screen name="UserInfoScreen"
          component={UserInfoScreen}
          options={{
            title: 'Info User',
            headerStyle: {backgroundColor: '#778899'},
            headerTitleStyle: { color: '#fff'},
            headerRight: () => (
              <Avatar.Icon style={{backgroundColor:'#000', marginRight: 20}}  size={40} icon='account-details'  />
            ),   
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  bar:{
    backgroundColor: '#000'
  }
})

export default App;
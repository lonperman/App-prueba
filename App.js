import React from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Avatar} from 'react-native-paper';

//Screen
import HomeScreen from './screens/HomeScreen';
import UserInfoScreen from './screens/UserInfoScreen';
import SearchScreen from './screens/SearchScreen';


const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="HomeScreen"
          component={HomeScreen}
          options={({navigation}) => ({
            title: 'Users',
            headerStyle: {backgroundColor: '#778899'},
            headerTitleStyle: { color: '#fff'},
            headerRight: () => (
             <TouchableOpacity  onPress={() => navigation.navigate('SearchUser')}>
                <Avatar.Icon style={{backgroundColor:'#000', marginRight: 20}}  size={40} icon='account-search' />
             </TouchableOpacity>
            ),   
          })}
        />
        <Stack.Screen name="UserInfoScreen"
          component={UserInfoScreen}
          options={{
            title: 'Details',
            headerStyle: {backgroundColor: '#778899'},
            headerTitleStyle: { color: '#fff'},
            headerRight: () => (
              <Avatar.Icon style={{backgroundColor:'#000', marginRight: 20}}  size={40} icon='account-details'/>
            ),   
          }}
        />
        <Stack.Screen name="SearchUser"
          component={SearchScreen}
          options={{
            title: 'Search',
            headerStyle: {backgroundColor: '#778899'},
            headerTitleStyle: { color: '#fff'},
            headerRight: () => (
              <Avatar.Icon style={{backgroundColor:'#000', marginRight: 20}}  size={40} icon='account-details'/>
            ),  
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;
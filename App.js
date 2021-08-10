import React from 'react';
import { TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Avatar, Provider as PaperProvider} from 'react-native-paper';

//Screen
import HomeScreen from './screens/HomeScreen';
import UserInfoScreen from './screens/UserInfoScreen';
import SearchScreen from './screens/SearchScreen';


const Stack = createNativeStackNavigator();


const App = () => {
  return (
   <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="HomeScreen"
            component={HomeScreen}
            options={({navigation}) => ({
              title: 'Users',
              headerStyle: {backgroundColor: '#EEEEEE'},
              headerTitleStyle: { color: '#2b2b2b'},
              headerRight: () => (
              <TouchableOpacity  onPress={() => navigation.navigate('SearchUser')}>
                  <Avatar.Icon style={{backgroundColor:'#2b2b2b', marginRight: 20}}  size={40} icon='account-search' />
              </TouchableOpacity>
              ),
              headerLeft: () => (
                <Avatar.Icon style={{backgroundColor:'#2b2b2b', marginLeft: 10}}  size={40} icon='home' />
              )   
            })}
          />
          <Stack.Screen name="UserInfoScreen"
            component={UserInfoScreen}
            options={{
              title: 'Details',
              headerStyle: {backgroundColor: '#EEEEEE'},
              headerTitleStyle: { color: '#2b2b2b'},
              headerRight: () => (
                <Avatar.Icon style={{backgroundColor:'#2b2b2b', marginRight: 20}}  size={40} icon='account-details'/>
              ),   
            }}
          />
          <Stack.Screen name="SearchUser"
            component={SearchScreen}
            options={{
              title: 'Search',
              headerStyle: {backgroundColor: '#EEEEEE'},
              headerTitleStyle: { color: '#2b2b2b'},
              headerRight: () => (
                <Avatar.Icon style={{backgroundColor:'#2b2b2b', marginRight: 20}}  size={40} icon='account-details'/>
              ),  
            }}
          />
      </Stack.Navigator>
    </NavigationContainer>
   </PaperProvider>
  )
}


export default App;
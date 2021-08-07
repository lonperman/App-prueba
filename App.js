import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar, Provider as PaperProvider } from 'react-native-paper';


import HomeScreen from './screens/HomeScreen';


const App = () => {
  return (
    <PaperProvider>
         <Appbar.Header style={styles.bar}>
            <Appbar.Content title='Users'  />
        </Appbar.Header>
        <HomeScreen />
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  bar:{
    backgroundColor: '#000'
  }
})

export default App;
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const Layout = ({children}) => {
    return <View style={styles.container} >
        {children}
    </View>
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
        alignItems: 'center',
        padding: 20,
        flexDirection: 'row',
        width: '100%'
    }
});

export default Layout;
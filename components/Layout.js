import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Layout = ({children}) => {
    return <View style={styles.container} >
        <StatusBar style={styles.bar}/>
        {children}
    </View>
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffe0',
        flex: 1,
        alignItems: 'center',
        padding: 5,
        flexDirection: 'row',
        width: wp('100%'),
        height: hp('100%'), 
    },
    bar:{
        width: wp('100%'),
        height: hp('10%'), 
    }
});

export default Layout;
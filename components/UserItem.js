import React from 'react';
import { StyleSheet,TouchableOpacity } from 'react-native';
import {DataTable,Text, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const UserItem = (users) => {
    
    const {user} = users;
    const navigation = useNavigation();

    return (
     
            <DataTable style={styles.container}>
                <DataTable.Row style={styles.UserRow}>
                    <DataTable.Cell style={styles.UserCell}>
                        <Text style={styles.Usertext}>{user.name}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.UserCellIcon}>
                        <TouchableOpacity style={styles.UserTouch}  onPress={() => navigation.navigate('UserInfoScreen', user)}>
                            <Avatar.Icon size={30} style={styles.UserIcon} icon='magnify'/>
                        </TouchableOpacity>
                    </DataTable.Cell>
                </DataTable.Row>
            </DataTable>
    )

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e6e6fa',
        width: wp('97%'),
        height: hp('10%'),
        padding: 10,
        paddingRight: 10,
        paddingBottom: 10,
        borderRadius: 10,
        marginVertical: 2
    },
    UserRow:{
        flexDirection: 'row',
        width: wp('90%'),
        border: 'none',
        marginLeft: '1%', 
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        flexWrap: 'wrap',
        alignContent: 'space-around'
    },
    UserCell:{
        width: wp('90%'),
        flexShrink: 1,
        flexGrow: 0,
        flexBasis: '75%'
    },
    UserTouch:{
        width: wp('100%'),
    },
    UserCellIcon:{
        width: wp('100%'),
        flexShrink: 1,
        flexGrow: 0,
        flexBasis: '25%'
    },
    UserIcon:{
        backgroundColor: '#2b2b2b',
        marginLeft: '10%'
    },
    Usertext: {
        fontSize:15,
        fontWeight: 'normal',
        width: wp('90%'),
        color: '#000',
        fontFamily: 'tahoma',
        marginRight: 10,
        marginLeft: 10  
    }

})

export default UserItem;
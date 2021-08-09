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
                    <DataTable.Cell style={styles.UserCell}>
                        <Text style={styles.Usertext}>{user.email}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.UserCell}>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('UserInfoScreen', user)}>
                        <Avatar.Icon style={{backgroundColor:'#000',marginLeft: 30}}  size={35} icon='account-details'/>
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
        marginVertical: 2,  
    },
    UserRow:{
        backgroundColor: '#000',
        flexDirection: 'column',
        width: wp('90%'),
        borderRadius:10,
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginRight: 50,
        marginLeft: 50
    },
    UserCell:{
        backgroundColor: 'red',
        width: wp('90%'),
        alignSelf: 'center',
        marginRight: 30,

    },
    Usertext: {
        fontSize:15,
        fontWeight: 'normal',
        width: wp('90%'),
        color: '#fff',
        fontFamily: 'tahoma',
        marginRight: 10,
        marginLeft: 10  
    }

})

export default UserItem;
import React from 'react';
import { StyleSheet,TouchableOpacity } from 'react-native';
import {DataTable,Text, Divider, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const UserItem = (users) => {
    
    const {user} = users;
    //console.log(user);

    const navigation = useNavigation();


    return (
     
            <DataTable style={styles.container}>
                <DataTable.Row >
                    <DataTable.Cell>
                        <Text style={styles.itemtext}>{user.name}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell>
                        <Text style={styles.itemtext}>{user.email}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell>
                        <Text style={styles.itemtext}>{user.address.city}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell >
                        <Text style={styles.itemtext}>{user.company.name}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell>
                    <TouchableOpacity 
                        style={{
                            backgroundColor:'#fff', 
                            borderRadius: 10,
                            fontSize: 15
                            }} 
                        onPress={() => navigation.navigate('UserInfoScreen', user)}>
                         <Avatar.Icon style={{backgroundColor:'#000'}}  size={35} icon='account-details'/>
                    </TouchableOpacity>
                    </DataTable.Cell>
                    <Divider/>
                </DataTable.Row>
            </DataTable>
       
    )

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e6e6fa',
        padding: 10,
        marginVertical: 2,
        borderRadius: 10,
        justifyContent: 'center',
        textAlign: 'auto',
        width: wp('97%'),
        height: hp('10%'), 
    },
    itemtext: {
        fontSize:13,
        color: '#000',
    }
})

export default UserItem;
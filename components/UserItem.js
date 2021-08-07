import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import {DataTable } from 'react-native-paper';


const UserItem = (users) => {
    
    const {user} = users;
    console.log(user);


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
            </DataTable.Row>
           
        </DataTable>
    )

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 5,
        marginVertical: 8,
        borderRadius: 10,
        justifyContent: 'center',
        width: '60%'
    },
    itemtext: {
        fontSize:15,
    }
})

export default UserItem;
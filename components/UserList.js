import * as React from 'react';
import { FlatList,StyleSheet,View, Text } from 'react-native';
import {DataTable } from 'react-native-paper';

import UserItem from './UserItem';
import {Users} from '../api';



const UserList = () => {

    const [User,setUser] = React.useState([]);

   

    const loadUsers = async () => {
        const data = await Users();
        setUser(data);
    }

    React.useEffect(() => {
        loadUsers();
    },[]);

    const renderUsers = ({ item }) => {
        return <UserItem user={item} />
    }

    return (
        <View >
            <DataTable style={styles.container}>
                <DataTable.Header>
                    <DataTable.Title >
                        <Text style={styles.itemText}>Nombre</Text>
                    </DataTable.Title>
                    <DataTable.Title>
                        <Text style={styles.itemText}>Email</Text>
                    </DataTable.Title>
                    <DataTable.Title>
                        <Text style={styles.itemText}>Ciudad</Text>
                    </DataTable.Title>
                    <DataTable.Title>
                        <Text style={styles.itemText}>Compañia</Text>
                    </DataTable.Title>
                </DataTable.Header>
           
            </DataTable>

            <FlatList
                data={User}
                keyExtractor={(item) => item.id + ''} 
                renderItem={renderUsers}
            />
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '60%', 
        padding: 5,
        borderRadius: 10
    },
    itemText:{
        fontSize: 15,
        color: '#000'
    }

})

export default UserList;
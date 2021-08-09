import React,{useState,useEffect} from 'react';
import { FlatList,StyleSheet,View} from 'react-native';
import {DataTable,Text} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import UserItem from './UserItem';
import {Users} from '../api';



const UserList = () => {

    const [User,setUser] = useState([]);

    const navigation = useNavigation();
   
    const loadUsers = async () => {
        const data = await Users();
        setUser(data);
    }

    useEffect(() => {
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
                        <Text style={styles.itemText}>Name</Text>
                    </DataTable.Title>
                    <DataTable.Title>
                        <Text style={styles.itemText}>Email</Text>
                    </DataTable.Title>
                    <DataTable.Title>
                        <Text style={styles.itemText}>City</Text>
                    </DataTable.Title>
                    <DataTable.Title>
                        <Text style={styles.itemText}>Company</Text>
                    </DataTable.Title>
                    <DataTable.Title>
                        <Text style={styles.itemText}>Action</Text>
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
        backgroundColor: '#40e0d0',
        width: wp('97%'),
        height: hp('10%'), 
        padding: 10,
        borderRadius: 10,
        textAlign: 'auto'
    },
    itemText:{
        fontSize: 15,
        color: '#000',
        fontWeight: 'bold'
        
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right:0,
        bottom:0
    }

})

export default UserList;
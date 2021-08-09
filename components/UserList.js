import React,{useState,useEffect} from 'react';
import { FlatList,StyleSheet,View} from 'react-native';
import {DataTable,Text} from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

//Screen
import UserItem from './UserItem';
//Call Api
import {Users} from '../api';


const UserList = () => {

    const [User,setUser] = useState([]);

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
                <DataTable.Header style={styles.header}>
                    <DataTable.Title style={styles.title} >
                        <Text style={styles.itemText}>Name</Text>
                    </DataTable.Title>
                    <DataTable.Title style={styles.title}>
                        <Text style={styles.itemText}>Email</Text>
                    </DataTable.Title>
                    <DataTable.Title style={styles.title}>
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
        alignSelf: 'center',
        justifyContent: 'center',
        width: wp('97%'),
        height: hp('10%'),
        padding: 10, 
        paddingRight: 10,
        paddingBottom: 10,
        borderRadius: 10
    },
    header: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: wp('90%'),
        borderRadius: 10,
        alignContent: 'space-around',
        alignSelf: 'center',
        marginRight: 50,
        marginLeft: 50
    },
    title:{
        backgroundColor: 'blue',
        borderRadius: 10,
        width: wp('90%'),
        height: hp('7%'),
        alignSelf: 'center',
        flexDirection: 'column',
        marginRight:20,
    },
    itemText:{
        fontSize: 15,
        color: '#fff',
        width: wp('90%'),
        fontWeight: 'bold',
        fontFamily: 'tahoma',
        backgroundColor: 'red',
        marginRight: 10,
        marginLeft: 10   
    }

})

export default UserList;
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
                    <DataTable.Title style={styles.name} >
                        <Text style={styles.itemText}>Name</Text>
                    </DataTable.Title>
                    <DataTable.Title style={styles.action}>
                         <Text style={styles.itemText}>Action</Text>
                    </DataTable.Title>
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
        width: wp('97%'),
        height: hp('10%'),
        padding: 10, 
        paddingRight: 10,
        paddingBottom: 10,
        borderRadius: 10,
        flexDirection: 'row'
    },
    name:{
        width: wp('90%'),
        flexShrink: 1,
        flexGrow: 0,
        flexBasis: '75%',
        marginLeft: '5%',
    },
    action:{
        width: wp('90%'),
        flexShrink: 1,
        flexGrow: 0,
        flexBasis: '25%',
    },
    title:{
        borderRadius: 10,
        width: wp('100%'),
        height: hp('7%'),
        alignSelf: 'center',
        margin: '5%',
        marginLeft: '15%',
        marginRight: '10%',
        flexShrink: 1,
        flexGrow: 0,
        flexBasis: '75%'
    },
    itemText:{
        fontSize: 15,
        width: wp('90%'),
        fontWeight: 'bold',
        fontFamily: 'tahoma',
        marginRight: 10,
        marginLeft: 10,
        color: '#2b2b2b'  
    }
})

export default UserList;
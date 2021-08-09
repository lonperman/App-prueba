import React,{useState,useEffect} from 'react';
import { FlatList, StyleSheet,View } from 'react-native';
import { Text,Card ,List,Paragraph,Searchbar } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Layout from '../components/Layout';
import {Users} from '../api';

const SearchScreen = () => {

    const [filterdData, setfilterdData] = useState([]);
    const [DataUsers,setDataUsers] = useState([]);
    const [search, setsearch] = useState('');

    const loadUsers = async () => {
        const data = await Users();
        setfilterdData(data);
        setDataUsers(data);
    }

    useEffect(() => {
        loadUsers();
    },[]);

    const searchFilter = (text) => {
        if(text){
            const newData = DataUsers.filter((item) => {
                const itemData = item.name ? 
                item.name.toUpperCase()
                : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) >  -1;
            });
            setfilterdData(newData);
            setsearch(text);
        } else {
            setfilterdData(DataUsers);
            setsearch(text);
        }
    } 

    const ItemView = ({item}) => {
        return(
            <Card style={styles.container}>
            <Card.Content>
                <Paragraph><List.Icon icon="account-tie" /><Text style={styles.itemText}>Name:</Text>{item.name}</Paragraph>
                <Paragraph><List.Icon icon="at" /><Text style={styles.itemText}>Email:</Text>{item.email}</Paragraph>
                <Paragraph><List.Icon icon="bank" /><Text style={styles.itemText}>City:</Text>{item.address.city}</Paragraph>
                <Paragraph><List.Icon icon="briefcase" /><Text style={styles.itemText}>Company:</Text>{item.company.name}</Paragraph>
            </Card.Content>
        </Card> 
        )
    }
 
    const ItemSeparatorView = () => {
        return (
            <View 
                style={{height: 0.5, width: '100%', backgroundColor: '#c8c8c8'}}
            />
        )
    }

    return (
        <Layout>
            <View style={styles.container}>
                <Searchbar 
                    style={styles.textInput}
                    placeholder='Search Here'
                    onChangeText={(text) => searchFilter(text)}
                />
                <FlatList
                    data={filterdData}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={ItemView}
                />
            </View>
        </Layout>
      
    
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: wp('97%')
    
    },
    textInput:{
        height: hp('8'),
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#009688',
        borderRadius: 10,
        backgroundColor: 'white' 
    },
     itemText: {
        fontWeight: 'bold'
    }
})

export default SearchScreen;
import React,{useState,useEffect} from 'react';
import { FlatList, StyleSheet,View } from 'react-native';
import { Text,Card ,List,Paragraph,Searchbar } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

//Screen
import Layout from '../components/Layout';
//Call APi
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
                <Paragraph style={styles.parag}>
                    <List.Icon style={styles.itemIcon} icon="account-tie" /><Text style={styles.itemText}>Name:</Text>
                </Paragraph>
                <Paragraph style={styles.parag}>
                    <Text style={styles.itemText2}>{item.name}</Text>
                </Paragraph>
                <Paragraph style={styles.parag}>
                    <List.Icon style={styles.itemIcon} icon="at" /><Text style={styles.itemText}>Email:</Text>
                </Paragraph>
                <Paragraph style={styles.parag}>
                    <Text style={styles.itemText2}>{item.email}</Text>
                </Paragraph>
                <Paragraph style={styles.parag}>
                    <List.Icon style={styles.itemIcon} icon="bank" /><Text style={styles.itemText}>City:</Text>
                </Paragraph>
                <Paragraph style={styles.parag}>
                    <Text style={styles.itemText2}>{item.address.city}</Text>
                </Paragraph>
                <Paragraph style={styles.parag}>
                    <List.Icon style={styles.itemIcon} icon="briefcase" /><Text style={styles.itemText}>Company:</Text>
                </Paragraph>
                <Paragraph style={styles.parag}>
                    <Text style={styles.itemText2}>{item.company.name}</Text>
                </Paragraph>
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
            <View >
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
        width: wp('97%'),
        height: hp('50%'),
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: '1.5%'
    },
    textInput:{
        width: wp('97%'),
        height: hp('8'),
        borderWidth: 1,
        paddingLeft: 20,
        margin: '0%',
        padding: '0%',
        borderColor: '#009688',
        borderRadius: 10,
        backgroundColor: 'white' 
    },
    parag:{
        flexDirection: 'column',
        alignItems: 'baseline',
        margin: '0%',
        padding: '0%'
    },
     itemText: {
        fontWeight: 'normal',
    },
    itemText2:{
        padding: '0%',
        marginLeft: '15%',
        fontSize: '18px',
        fontWeight: 'bold'
    },
    itemIcon: {
        margin:'0%',
        marginRight: '3%',
        padding:'0%',
        height: '90%'
    }
})

export default SearchScreen;
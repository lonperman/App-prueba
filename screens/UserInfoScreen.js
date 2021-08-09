import React from 'react';
import { Card,Paragraph, List,Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Layout from '../components/Layout';


const UserInfoScreen = ({route}) => {

    const user = route.params;
    
    return (
        <Layout>
                <Card style={styles.container}>
                    <Card.Content>
                        <Paragraph style={styles.parag}><List.Icon icon="account-tie" /><Text style={styles.itemText}>Name:</Text>{user.name}</Paragraph>
                        <Paragraph style={styles.parag}><List.Icon icon="at" /><Text style={styles.itemText}>Email:</Text>{user.email}</Paragraph>
                        <Paragraph style={styles.parag}><List.Icon icon="bank" /><Text style={styles.itemText}>City:</Text>{user.address.city}</Paragraph>
                        <Paragraph style={styles.parag}><List.Icon icon="briefcase" /><Text style={styles.itemText}>Company:</Text>{user.company.name}</Paragraph>
                    </Card.Content>
                </Card> 
        </Layout>
    )
}

const styles = StyleSheet.create({
    container:{
        width: wp('97%'),
        height: hp('40%'),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    parag:{
        flexDirection: 'column',
        alignItems: 'baseline',
        justifyContent: 'center'
    },
    itemText: {
        fontWeight: 'bold',
    }
   
})

export default UserInfoScreen;
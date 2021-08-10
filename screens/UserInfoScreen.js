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
                        <Paragraph style={styles.parag}>
                            <List.Icon style={styles.itemIcon} icon="account-tie" /><Text style={styles.itemText}>Name:</Text>
                        </Paragraph>
                        <Paragraph style={styles.parag}>
                            <Text style={styles.itemText2}>{user.name}</Text>
                        </Paragraph>
                        <Paragraph style={styles.parag}
                            ><List.Icon style={styles.itemIcon} icon="at" /><Text style={styles.itemText}>Email:</Text>
                        </Paragraph>
                        <Paragraph style={styles.parag}>
                            <Text style={styles.itemText2}>{user.email}</Text>
                        </Paragraph>
                        <Paragraph style={styles.parag}>
                            <List.Icon style={styles.itemIcon} icon="bank" /><Text style={styles.itemText}>City:</Text>
                        </Paragraph>
                        <Paragraph style={styles.parag}>
                            <Text style={styles.itemText2}>{user.address.city}</Text>
                        </Paragraph>
                        <Paragraph style={styles.parag}>
                            <List.Icon style={styles.itemIcon} icon="briefcase" /><Text style={styles.itemText}>Company:</Text>
                        </Paragraph>
                        <Paragraph style={styles.parag}>
                            <Text style={styles.itemText2}>{user.company.name}</Text>
                        </Paragraph>
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
        flexDirection: 'row'
    },
    parag:{
        flexDirection: 'column',
        alignItems: 'baseline',
        margin: '0%',
        padding: '0%'
    },
    itemText2:{
        padding: '0%',
        marginLeft: '15%',
        fontSize: '18px',
        fontWeight: 'bold'
    },
    itemText: {
        fontWeight: 'normal'
    },
    itemIcon: {
        margin:'0%',
        marginRight: '3%',
        padding:'0%',
        height: '90%'
    }
   
})

export default UserInfoScreen;
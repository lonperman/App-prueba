import React from 'react';
import { View, StyleSheet } from 'react-native';


import Layout from '../components/Layout';


import UserList from '../components/UserList';


const HomeScreen = () => {
    return (
       <Layout>
            <UserList/>
       </Layout>
    )
}

export default HomeScreen;
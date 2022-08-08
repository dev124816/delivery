import React from 'react';
import Layout from '../Layout';
import Home from '../home/Home';


function HomeScreen(props) {
    return (
        <Layout statusBarBackgroundColor="#FFFFFF" statusBarStyle="dark-content" statusBarAnimated={true}>
            <Home />
        </Layout>
    );
}

export default HomeScreen;

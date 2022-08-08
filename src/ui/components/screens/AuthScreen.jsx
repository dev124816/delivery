import React from 'react';
import Layout from '../Layout';
import Auth from '../auth/Auth';


function AuthScreen(props) {
    return (
        <Layout statusBarBackgroundColor="#FFFFFF" statusBarStyle="dark-content" statusBarAnimated={true}>
            <Auth />
        </Layout>
    );
}

export default AuthScreen;

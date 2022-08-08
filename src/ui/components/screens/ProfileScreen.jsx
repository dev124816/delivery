import React from 'react';
import Layout from '../Layout';
import Profile from '../profile/Profile';


function ProfileScreen(props) {
    return (
        <Layout statusBarBackgroundColor="#FFFFFF" statusBarStyle="dark-content" statusBarAnimated={true}>
            <Profile />
        </Layout>
    );
}

export default ProfileScreen;

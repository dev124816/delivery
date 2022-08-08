import React from 'react';
import {View} from 'react-native';
import ProfileHeader from './header/ProfileHeader';
import ProfileBody from './body/ProfileBody';
import NavigationBar from '../navigation_bar/NavigationBar.jsx';
import $ from '../../style.js';


function Profile(props) {
    return (
        <View style={[$.secBg, $.flex]}>
            <ProfileHeader />
            <ProfileBody />
            <NavigationBar />
        </View>
    );
}

export default Profile;

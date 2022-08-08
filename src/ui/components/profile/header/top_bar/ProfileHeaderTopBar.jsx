import React from 'react';
import {View} from 'react-native';
import ProfileHeaderTopBarBackButton from './ProfileHeaderTopBarBackButton';
import ProfileHeaderTopBarTitle from './ProfileHeaderTopBarTitle';
import $ from '../../../../style.js';


function ProfileHeaderTopBar(props) {
    return (
        <View style={[$.w100, $.flexR, $.center, $.mb4]}>
            <ProfileHeaderTopBarBackButton />
            <ProfileHeaderTopBarTitle />
        </View>
    );
}

export default ProfileHeaderTopBar;

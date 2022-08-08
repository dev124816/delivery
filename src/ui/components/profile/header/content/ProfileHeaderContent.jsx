import React from 'react';
import {View} from 'react-native';
import ProfileHeaderContentImage from './ProfileHeaderContentImage';
import ProfileHeaderContentPhone from './ProfileHeaderContentPhone';
import $ from '../../../../style.js';


function ProfileHeaderContent(props) {
    return (
        <View style={$.flexR}>
            <ProfileHeaderContentImage />
            <ProfileHeaderContentPhone phone={props.phone} />
        </View>
    );
}

export default ProfileHeaderContent;

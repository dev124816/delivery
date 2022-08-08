import React from 'react';
import {Image} from 'react-native';
import $ from '../../../../style.js';


function ProfileHeaderContentImage(props) {
    return <Image style={[{width: 75, height: 75}, $.priBR, $.mr2]} source={require('../../../../assets/avatar.png')} />;
}

export default ProfileHeaderContentImage;

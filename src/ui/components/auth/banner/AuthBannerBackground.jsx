import React from 'react';
import {Image} from 'react-native';
import $ from '../../../style.js';


function AuthBannerBackground(props) {
    return <Image source={require('../../../assets/icon.png')} style={[{height: 150}, $.w100]} />;
}

export default AuthBannerBackground;

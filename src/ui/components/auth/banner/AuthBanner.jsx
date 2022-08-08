import React from 'react';
import {View} from 'react-native';
import AuthBannerBackground from './AuthBannerBackground';
import AuthBannerForeground from './foreground/AuthBannerForeground';
import $ from '../../../style.js';


function AuthBanner(props) {
    return (
        <View style={$.mb4}>
            <AuthBannerBackground />
            <AuthBannerForeground />
        </View>
    );
}

export default AuthBanner;

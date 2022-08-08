import React from 'react';
import {View} from 'react-native';
import AuthBannerLogo from './AuthBannerLogo';
import AuthBannerTitle from './AuthBannerTitle';
import $ from '../../../../style.js';


function AuthBannerForeground(props) {
    return (
        <View style={[$.center, $.mt2]}>
            <AuthBannerLogo />
            <AuthBannerTitle />
        </View>
    );
}

export default AuthBannerForeground;

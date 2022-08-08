import React from 'react';
import {View} from 'react-native';
import AuthBanner from './banner/AuthBanner';
import AuthForms from './forms/AuthForms';
import $ from '../../style.js';


function Auth(props) {
    return (
        <View style={[$.flex, $.secBg, $.mb4]}>
            <AuthBanner />
            <AuthForms />
        </View>
    );
}

export default Auth;

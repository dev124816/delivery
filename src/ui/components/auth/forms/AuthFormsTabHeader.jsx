import React from 'react';
import {View, Text} from 'react-native';
import $ from '../../../style.js';


function AuthFormsTabHeader(props) {
    return (
        <View style={[$.flex, $.center, $.px2, $.py1]}>
            <Text style={[$.priC, $.fWSemi]}>{props.title}</Text>
        </View>
    );
}

export default AuthFormsTabHeader;

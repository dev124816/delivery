import React from 'react';
import {Text, View} from 'react-native';
import $ from '../../../style.js';


function ProfileBodyTabHeader(props) {
    return (
        <View style={[$.flex, $.center, $.px3, $.py2]}>
            <Text style={[{fontSize: 15}, $.priC, $.fWSemi]}>{props.title}</Text>
        </View>
    );
}

export default ProfileBodyTabHeader;

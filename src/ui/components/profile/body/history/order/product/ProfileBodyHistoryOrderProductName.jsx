import React from 'react';
import {Text} from 'react-native';
import $ from '../../../../../../style.js';


function ProfileBodyHistoryOrderProductName(props) {
    return (
        <Text style={$.terC}>{props.name} x {props.quantity}</Text>
    );
}

export default ProfileBodyHistoryOrderProductName;

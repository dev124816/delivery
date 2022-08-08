import React from 'react'
import {Text} from 'react-native';
import $ from '../../../../../style.js';


function ProfileBodyHistoryOrderTitle(props) {
    return (
        <Text style={[{fontSize: 16}, $.priC, $.fWSemi, $.mb1]}>Commande {props.id}</Text>
    );
}

export default ProfileBodyHistoryOrderTitle;

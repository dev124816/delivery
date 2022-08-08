import React from 'react';
import {Text} from 'react-native';
import $ from '../../../../../style.js';


function CartBodyProductName(props) {
    return <Text style={[{fontSize: 20}, $.priC, $.fWSemi, $.mb1]}>{props.name}</Text>;
}

export default CartBodyProductName;

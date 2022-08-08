import React from 'react';
import {Text} from 'react-native';
import $ from '../../../../../../style.js';


function CartBodyProductCurrency(props) {
    return <Text style={[{fontSize: 14}, $.accC, $.fWSemi]}>{props.currency}</Text>;
}

export default CartBodyProductCurrency;

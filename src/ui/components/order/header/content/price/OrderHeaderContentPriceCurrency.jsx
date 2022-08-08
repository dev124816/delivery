import React from 'react';
import {Text} from 'react-native';
import $ from '../../../../../style';


function OrderHeaderContentPriceCurrency(props) {
    return (
        <Text style={[{fontSize: 16}, $.priC, $.fWSemi]}>{props.currency}</Text>
    );
}

export default OrderHeaderContentPriceCurrency;

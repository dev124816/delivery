import React from 'react';
import {Text} from 'react-native';
import OrderHeaderContentPriceCurrency from './OrderHeaderContentPriceCurrency';
import $ from '../../../../../style';


function OrderHeaderContentPrice(props) {
    return (
        <Text style={[{fontSize: 16}, $.priC, $.fWSemi]}>
            {props.price} <OrderHeaderContentPriceCurrency currency={props.currency} />
        </Text>
    );
}

export default OrderHeaderContentPrice;

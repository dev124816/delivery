import React from 'react';
import {Text} from 'react-native';
import CartBodyProductCurrency from './CartBodyProductCurrency';
import $ from '../../../../../../style.js';


function CartBodyProductPrice(props) {
    return (
        <Text style={[{fontSize: 20}, $.priC, $.fWBold]}>
            {props.price} <CartBodyProductCurrency currency={props.currency} />
        </Text>
    );
}

export default CartBodyProductPrice;

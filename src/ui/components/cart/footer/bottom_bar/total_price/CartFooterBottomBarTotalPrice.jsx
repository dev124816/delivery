import React from 'react';
import {Text} from 'react-native';
import CartFooterBottomBarTotalCurrency from './CartFooterBottomBarTotalCurrency';
import $ from '../../../../../style.js';


function CartFooterBottomBarTotalPrice(props) {
    return (
        <Text style={[{fontSize: 20}, $.priC, $.fWBold]}>
            {props.totalPrice} <CartFooterBottomBarTotalCurrency currency={props.currency} />
        </Text>
    );
}

export default CartFooterBottomBarTotalPrice;

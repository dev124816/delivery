import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import CartFooterBottomBarTotalLabel from './CartFooterBottomBarTotalLabel';
import CartFooterBottomBarTotalPrice from './total_price/CartFooterBottomBarTotalPrice';
import $ from '../../../../style.js';


function CartFooterBottomBar(props) {
    return (
        <View style={[$.flex, $.flexR, $.jusBetween, $.mb3]}>
            <CartFooterBottomBarTotalLabel />
            <CartFooterBottomBarTotalPrice totalPrice={props.cart.totalPrice} currency={props.cart.currency}  />
        </View>
    );
}

export default connect((state) => {
    return {
        cart: state.cart
    };
}, null)(CartFooterBottomBar);

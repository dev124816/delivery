import React from 'react';
import {View} from 'react-native';
import CartHeader from './header/CartHeader';
import CartBody from './body/CartBody';
import CartFooter from './footer/CartFooter';
import $ from '../../style.js';


function Cart(props) {
    return ( 
        <View style={$.secBg}>
            <CartHeader />
            <CartBody />
            <CartFooter />
        </View>
    );
}

export default Cart;

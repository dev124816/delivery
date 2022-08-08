import React from 'react';
import {View} from 'react-native';
import CartBodyProducts from './products/CartBodyProducts';
import $ from '../../../style.js';


function CartBody(props) {
    return (
        <View style={[$.px3, $.mt5]}>
            <CartBodyProducts />
        </View>
    );
}

export default CartBody;

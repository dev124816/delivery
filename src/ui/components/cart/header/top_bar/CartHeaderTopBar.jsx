import React from 'react';
import {View} from 'react-native';
import CartHeaderBackButton from './CartHeaderBackButton';
import $ from '../../../../style.js';


function CartHeaderTopBar(props) {
    return (
        <View style={[$.w100, $.flexR, $.jusBetween, $.mb2]}>
            <CartHeaderBackButton />
        </View>
    );
}

export default CartHeaderTopBar;

import React from 'react';
import {View} from 'react-native';
import CartHeaderTopBar from './top_bar/CartHeaderTopBar'
import CartHeaderTitle from './title/CartHeaderTitle';
import $ from '../../../style.js';


function CartHeader(props) {
    return (
        <View style={[$.accBg, $.px3, $.py4]}>
            <CartHeaderTopBar />
            <CartHeaderTitle />
        </View>
    );
}

export default CartHeader;

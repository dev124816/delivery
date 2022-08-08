import React from 'react';
import {View} from 'react-native';
import CartFooterBottomBar from './bottom_bar/CartFooterBottomBar';
import CartFooterCheckoutButton from './CartFooterCheckoutButton';
import $ from '../../../style';


function CartFooter(props) {
    return (
        <View style={[$.px3, $.mt1, $.mb4]}>
            <CartFooterBottomBar />
            <CartFooterCheckoutButton />
        </View>
    );
}

export default CartFooter;

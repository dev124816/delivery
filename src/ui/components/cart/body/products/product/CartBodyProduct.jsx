import React from 'react';
import {View} from 'react-native';
import CartBodyProductImage from './CartBodyProductImage';
import CartBodyProductName from './CartBodyProductName';
import CartBodyProductPrice from './price/CartBodyProductPrice';
import CartBodyProductQuantity from './quantity/CartBodyProductQuantity';
import CartBodyProductRemoveButton from './CartBodyProductRemoveButton';
import $ from '../../../../../style.js';


function CartBodyProduct(props) {
    return (
        <View key={props.id} style={[$.priBg, $.priBR, $.priS, $.flexR, $.mb4]}>
                <CartBodyProductImage image={props.image} />
            <View style={[$.px3, $.flex, $.jusCenter]}>
                <View style={[$.flexR, $.jusBetween]}>
                    <CartBodyProductName name={props.name} />
                    <CartBodyProductRemoveButton id={props.id} />
                </View>
                <View style={[$.flexR, $.jusBetween]}>
                    <CartBodyProductPrice price={props.price} currency={props.currency} />
                    <CartBodyProductQuantity id={props.id} quantity={props.quantity} />
                </View>
            </View>
        </View>
    );
}

export default CartBodyProduct;

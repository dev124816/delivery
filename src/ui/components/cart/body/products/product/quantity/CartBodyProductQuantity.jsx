import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {increaseProductQuantity, decreaseProductQuantity, removeProductFromCart} from '../../../../../../redux/actions.js';
import CartBodyProductQuantityIncreaseButton from './CartBodyProductQuantityIncreaseButton';
import CartBodyProductQuantityDecreaseButton from './CartBodyProductQuantityDecreaseButton';
import $ from '../../../../../../style.js';


function CartBodyProductQuantity(props) {
    return (
        <View style={[$.accBg, $.priBR, $.priS, $.px1, $.flexR, $.center]}>
            <CartBodyProductQuantityIncreaseButton onPress={(event) => props.increaseProductQuantity(props.id)} />
            <Text style={[$.priC, $.fWBold, $.px1]}>{props.quantity}</Text>
            <CartBodyProductQuantityDecreaseButton onPress={(event) => props.decreaseProductQuantity(props.id)} />
        </View>
    );
}

export default connect(null, (dispatch) => {
    return {
        increaseProductQuantity: (id) => {
            increaseProductQuantity.payload = id;
            dispatch(increaseProductQuantity);
        },
        decreaseProductQuantity: (id) => {
            decreaseProductQuantity.payload = id;
            dispatch(decreaseProductQuantity);
        },
        removeProductFromCart: (id) => {
            removeProductFromCart.payload = id;
            dispatch(removeProductFromCart);
        }    };
})(CartBodyProductQuantity);

import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {increaseProductQuantity, decreaseProductQuantity} from '../../../../redux/actions.js';
import ProductBodyQuantityIncreaseButton from './ProductBodyQuantityIncreaseButton';
import ProductBodyQuantityDecreaseButton from './ProductBodyQuantityDecreaseButton';
import $ from '../../../../style.js';


function ProductBodyQuantity(props) {
    return (
        <View style={[{width: 100, position: 'relative', bottom: 28}, $.accBg, $.priBR, $.priS, $.px1, $.py0, $.flexR, $.center]}>
            <ProductBodyQuantityIncreaseButton onPress={(event) => props.increaseProductQuantity(props.id)} />
            <Text style={[$.priC, $.fWBold, $.px1]}>{props.quantity}</Text>
            <ProductBodyQuantityDecreaseButton onPress={(event) => props.decreaseProductQuantity(props.id)} />
        </View>
    )
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
        }    
    }
})(ProductBodyQuantity);
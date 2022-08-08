import React from 'react';
import {Text} from 'react-native';
import ProductBodyCurrency from './ProductBodyCurrency';
import $ from '../../../../style.js';


function ProductBodyPrice(props) {
    return (
        <Text style={[{fontSize: 20}, $.priC, $.fWBold]}>
            {props.price} <ProductBodyCurrency currency={props.currency} />
        </Text>
    );
}

export default ProductBodyPrice;

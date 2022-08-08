import React from 'react';
import {View, Text} from 'react-native';
import ProductBodyDescriptionTitle from './ProductBodyDescriptionTitle';
import $ from '../../../../style.js';


function ProductBodyDescription(props) {
    return (
        <View style={$.mb2}>
            <ProductBodyDescriptionTitle />
            <Text style={[{fontSize: 13}, $.terC, $.fWSemi]}>{props.description}</Text>
        </View>
    );
}

export default ProductBodyDescription;

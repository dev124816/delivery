import React from 'react';
import {Text} from 'react-native';
import $ from '../../../style.js';


function ProductBodyName(props) {
    return <Text style={[{fontSize: 20}, $.priC, $.fWSemi]}>{props.name}</Text>;
}

export default ProductBodyName;

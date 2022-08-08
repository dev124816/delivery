import React from 'react';
import {View} from 'react-native';
import ProductHeaderTopBarBackButton from './ProductHeaderTopBarBackButton';
import $ from '../../../../style.js';


function ProductHeaderTopBar(props) {
    return (
        <View style={[$.flexR, $.jusStart, $.px3, $.py2]}>
            <ProductHeaderTopBarBackButton />
        </View>
    );
}

export default ProductHeaderTopBar;

import React from 'react';
import {View} from 'react-native';
import ProductHeaderBanner from './banner/ProductHeaderBanner';
import ProductHeaderTopBar from './top_bar/ProductHeaderTopBar';
import $ from '../../../style.js';


function ProductHeader(props) {
    return (
        <View style={$.mb4}>
            <ProductHeaderTopBar />
            <ProductHeaderBanner image={props.image} />
        </View>
    );
}

export default ProductHeader;

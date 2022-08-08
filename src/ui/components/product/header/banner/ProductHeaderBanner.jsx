import React from 'react';
import {Image, View} from 'react-native';
import config from '../../../../config.json';
import $ from '../../../../style.js';


function ProductHeaderBanner(props) {
    return (
        <View style={$.center}>
            <Image style={[{width: 200, height: 200, borderRadius: 100}, $.priS]} source={{width: 200, height: 200, uri: config.url + '/storage/products/' + props.image}} />
        </View>
    );
}

export default ProductHeaderBanner;

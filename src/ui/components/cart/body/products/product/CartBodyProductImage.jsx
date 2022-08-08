import React from 'react';
import {Image} from 'react-native';
import config from '../../../../../config.json';
import $ from '../../../../../style.js';


function CartBodyProductImage(props) {
    return <Image style={[{width: 100, height: 100, borderRadius: 50}, $.priS]} source={{width: 100, height: 100, uri: config.url + '/storage/products/' + props.image}} />;
}

export default CartBodyProductImage;

import React from 'react';
import {Image} from 'react-native';
import config from '../../../../../config.json';
import $ from '../../../../../style.js';


function HomeBodyProductImage(props) {
    return <Image style={[{width: 150, height: 150, position: 'relative', bottom: 70, marginBottom: -35, borderRadius: 75}, $.priS]} source={{width: 150, height: 150, uri: config.url + '/storage/products/' + props.image}} />;
}

export default HomeBodyProductImage;

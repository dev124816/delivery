import React from 'react';
import {Image} from 'react-native';
import config from '../../../../../config.json';
import $ from '../../../../../style.js';


function HomeBodyCategoryImage(props) {
    return <Image style={[{width: 20, height: 20}, $.priBR, $.priS, $.mr1]} source={{width: 20, height: 20, uri: config.url + '/storage/categories/' + props.image}} />;
}

export default HomeBodyCategoryImage;

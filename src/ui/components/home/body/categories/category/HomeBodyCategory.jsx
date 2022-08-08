import React from 'react';
import {Pressable} from 'react-native';
import HomeBodyCategoryImage from './HomeBodyCategoryImage';
import HomeBodyCategoryName from './HomeBodyCategoryName';
import $ from '../../../../../style.js';


function HomeBodyCategory(props) {
    return (
        <Pressable 
            key={props.id} 
            style={[(props.active ? $.accBg : $.priBg), $.accB, $.priBR, $.flexR, $.center, $.px2, $.py1, $.mr2]} 
            onPress={props.onPress}
        >
            <HomeBodyCategoryImage image={props.image} />
            <HomeBodyCategoryName name={props.name} />
        </Pressable>
    );
}

export default HomeBodyCategory;

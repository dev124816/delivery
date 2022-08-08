import React from 'react';
import {View} from 'react-native';
import HomeBodyCategories from './categories/HomeBodyCategories';
import HomeBodyProducts from './products/HomeBodyProducts';
import $ from '../../../style.js';


function HomeBody(props) {
    return (
        <View style={[$.pl3, $.pt3, $.pb5, $.overflow]}>
            <HomeBodyCategories />
            <HomeBodyProducts />
        </View>
    );
}

export default HomeBody;

import React, {useState} from 'react';
import {Pressable} from 'react-native';
import HomeBodyProductImage from './HomeBodyProductImage';
import HomeBodyProductName from './HomeBodyProductName';
import HomeBodyProductDescription from './HomeBodyProductDescription';
import HomeBodyProductPrice from './price/HomeBodyProductPrice';
import $ from '../../../../../style.js';


function HomeBodyProduct(props) {    
    return (
        <Pressable 
            key={props.id} 
            style={[$.priBg, $.priBR, $.priS, $.mr3, $.px4, $.py3, $.center]}
            onPress={props.onPress}
        >
            <HomeBodyProductImage image={props.image} />
            <HomeBodyProductName name={props.name} />
            <HomeBodyProductDescription description={props.description} />
            <HomeBodyProductPrice price={props.price} currency={props.currency} />
        </Pressable>
    );
}

export default HomeBodyProduct;

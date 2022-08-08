import React from 'react';
import {View} from 'react-native';
import $ from '../../../../style.js';


function CartHeaderTitleContainer(props) {
    return (
        <View style={[$.flexR, $.center]}>
            {props.children}
        </View>
    );
}

export default CartHeaderTitleContainer;

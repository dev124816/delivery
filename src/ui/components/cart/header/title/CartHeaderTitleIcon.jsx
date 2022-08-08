import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import $ from '../../../../style.js';


function CartHeaderTitleIcon(props) {
    return <Icon style={[$.secC, $.mr1]} name="cart" size={24} />;
}

export default CartHeaderTitleIcon;

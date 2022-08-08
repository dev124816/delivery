import React from 'react';
import {Text} from 'react-native';
import CartHeaderTitleContainer from './CartHeaderTitleContainer';
import CartHeaderTitleIcon from './CartHeaderTitleIcon';
import $ from '../../../../style.js';


function CartHeaderTitle(props) {
    return (
        <CartHeaderTitleContainer>
            <CartHeaderTitleIcon />
            <Text style={[{fontSize: 22}, $.secC, $.fWBold]}>Mon Panier</Text>
        </CartHeaderTitleContainer>
    );
}

export default CartHeaderTitle;

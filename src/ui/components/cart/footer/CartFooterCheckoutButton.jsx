import React from 'react';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Button from '../../Button';
import $ from '../../../style.js';


function CartFooterCheckoutButton(props) {
    const navigation = useNavigation();

    return <Button
        style={[$.accBg, $.priBR, $.priS, $.px2, $.py1, $.center]}
        textStyle={[$.priC, $.fWSemi]}
        title="Checkout" 
        onPress={(event) => {
            if (props.products.filter((product) => product.inCart).length > 0) {
                navigation.navigate('/order');
            }            
        }}
    />;
}

export default connect((state) => {
    return {
        products: state.products
    };
})(CartFooterCheckoutButton);

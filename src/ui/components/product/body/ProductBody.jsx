import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {addProductToCart} from '../../../redux/actions.js';
import Icon from 'react-native-vector-icons/Ionicons';
import ProductBodyQuantity from './quantity/ProductBodyQuantity';
import ProductBodyName from './ProductBodyName';
import ProductBodyPrice from './price/ProductBodyPrice';
import ProductBodyDescription from './description/ProductBodyDescription';
import ProductBodyAddToCartButton from './ProductBodyAddToCartButton';
import $ from '../../../style.js';


function ProductBody(props) {
    return (
        <View style={[$.priBg, $.priBR, $.priS, $.px3, $.py2]}>
            <View style={$.center}>
                <ProductBodyQuantity id={props.id} quantity={props.quantity} />
            </View>
            <View style={[$.flexR, $.jusBetween, $.w100, $.mb4]}>
                <ProductBodyName name={props.name} />
                <ProductBodyPrice price={props.price} currency={props.currency} />
            </View>
            <View style={[$.flexR, $.jusBetween, $.w100, $.my3]}>
                <ProductBodyDescription description={props.description} />
                {props.inCart ? <Icon style={$.accC} name="checkmark" size={30} /> 
                : <ProductBodyAddToCartButton onPress={(event) => props.addProductToCart(props.id)} />}
            </View>
        </View>
    );
}

export default connect(null, (dispatch) => {
    return {
        addProductToCart: (id) => {
            addProductToCart.payload = id;
            dispatch(addProductToCart);
        }
    };
})(ProductBody);

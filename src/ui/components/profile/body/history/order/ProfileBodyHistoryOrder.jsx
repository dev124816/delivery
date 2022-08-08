import React from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import ProfileBodyHistoryOrderTitle from './ProfileBodyHistoryOrderTitle';
import ProfileBodyHistoryOrderProduct from './product/ProfileBodyHistoryOrderProduct';
import $ from '../../../../../style.js';


function ProfileBodyHistoryOrder(props) {
    return (
        <View style={[$.priBg, $.priBR, $.priS, $.px3, $.py2, $.mb4]}>
            <ProfileBodyHistoryOrderTitle id={props.id} />
            {props.orderProducts.map((orderProduct, index) => {
                return (
                    <ProfileBodyHistoryOrderProduct 
                        key={index}
                        id={props.id}
                        name={orderProduct.name} 
                        price={orderProduct.price} 
                        currency={orderProduct.currency} 
                        quantity={orderProduct.pivot.quantity}
                    />
                );
            })}        
        </View>
    );
}

export default connect((state) => {
    return {
        products: state.products
    };
})(ProfileBodyHistoryOrder);

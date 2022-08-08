import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import CartBodyProduct from './product/CartBodyProduct';


function CartBodyProducts(props) {
    return (
        <View>
            {props.products.filter((product) => {
                return product?.inCart === true;
            }).map((product) => {
                return (
                    <CartBodyProduct
                        key={product?.id}
                        id={product?.id}
                        image={product?.image}
                        name={product?.name}
                        price={product?.price}
                        currency={product?.currency}
                        quantity={product?.quantity}
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
})(CartBodyProducts);

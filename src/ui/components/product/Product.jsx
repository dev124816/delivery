import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import ProductHeader from './header/ProductHeader';
import ProductBody from './body/ProductBody';
import $ from '../../style.js';


function Product(props) {
    const route = useRoute();    
    const product = props.products.filter((product) => product?.id === route.params.id)[0];

    return (
        <View style={[$.secBg, $.flex]}>
            <ProductHeader image={product?.image} />
            <ProductBody 
                id={product?.id}
                name={product?.name}
                price={product?.price}
                currency={product?.currency} 
                stars={product?.stars}
                // time={product?.time}
                description={product?.description}
                // ingredients={product?.ingredients}
                quantity={product?.quantity}
                inCart={product?.inCart}
            />
        </View>
    );
}

export default connect((state) => {
    return {
        products: state.products
    }
})(Product);

import React, {useEffect} from 'react';
import axios from 'axios';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import HomeBodyProduct from './product/HomeBodyProduct';
import {fillProducts} from '../../../../redux/actions.js';
import config from '../../../../config.json';
import $ from '../../../../style.js';


function HomeBodyProducts(props) {    
    const navigation = useNavigation();

    useEffect(() => {
        axios.get(config.url + '/api/products', {
            headers: {
                'Authorization': `Bearer ${props.token}`
            }
        }).then((response) => {
            response.data.map((product) => {
                product.quantity = 1;
                product.inCart = false;
                return product
            });
            props.fillProducts(response.data);
        }).catch((error) => console.log(error));
    }, []);


    return (
        <View style={[$.flexR, $.mt5]}>
            {props.products.filter((product) => {
                return (
                    product?.category.name === props.category
                    && product?.name.toLowerCase().includes(props.search.toLowerCase())
                );
            }).map((product, index) => {
                return (
                    <HomeBodyProduct
                        key={index}
                        id={product?.id} 
                        image={product?.image}
                        name={product?.name}
                        description={product?.description}
                        price={product?.price}
                        currency={product?.currency}
                        onPress={(event) => navigation.navigate('/product', {id: product?.id})}
                    />
                );
            })}
        </View>
    );
}

export default connect((state) => {
    return {
        category: state.home.category,
        search: state.home.search,
        products: state.products,
        token: state.token
    };
}, (dispatch) => {
    return {
        fillProducts: (products) => {
            fillProducts.payload = products;
            dispatch(fillProducts);
        }
    };
})(HomeBodyProducts);

import React from 'react';
import Layout from '../Layout';
import Product from '../product/Product';


function ProductScreen(props) {
    return (
        <Layout statusBarBackgroundColor="#FFFFFF" statusBarStyle="dark-content" statusBarAnimated={true}>
            <Product />
        </Layout>
    );
}

export default ProductScreen;

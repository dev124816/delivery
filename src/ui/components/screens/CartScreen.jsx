import React from 'react';
import Layout from '../Layout';
import Cart from '../cart/Cart';


function CartScreen(props) {
    return (
        <Layout statusBarBackgroundColor="#FFFFFF" statusBarStyle="dark-content" statusBarAnimated={true}>
            <Cart />
        </Layout>
    );
}

export default CartScreen;

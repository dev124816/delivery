import React from 'react';
import Layout from '../Layout';
import Order from '../order/Order';


function OrderScreen(props) {
    return (
        <Layout statusBarBackgroundColor="#FFFFFF" statusBarStyle="dark-content" statusBarAnimated={true}>
            <Order />
        </Layout>
    );
}

export default OrderScreen;

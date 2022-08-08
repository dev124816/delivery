import React from 'react';
import {View} from 'react-native';
import OrderHeader from './header/OrderHeader';
import OrderBody from './body/OrderBody';


function Order(props) {
    return (
        <View>
            <OrderHeader />
            <OrderBody />
        </View>
    );
}

export default Order;

import React from 'react';
import {View} from 'react-native';
import OrderHeaderTopBar from './top_bar/OrderHeaderTopBar';
import OrderHeaderContent from './content/OrderHeaderContent';
import $ from '../../../style';


function OrderHeader(props) {
    return (
        <View style={[$.priBg, $.priBR, $.px3, $.py4]}>
            <OrderHeaderTopBar />
            <OrderHeaderContent />
        </View>
    );
}

export default OrderHeader;

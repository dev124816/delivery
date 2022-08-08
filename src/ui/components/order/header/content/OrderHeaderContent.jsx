import React from 'react';
import {View} from 'react-native';
import OrderHeaderContentLabel from './OrderHeaderContentLabel';
import OrderHeaderContentPrice from './price/OrderHeaderContentPrice';
import $ from '../../../../style';


function OrderHeaderContent(props) {
    return (
        <View style={[$.flexR, $.jusBetween]}>
            <OrderHeaderContentLabel />
            <OrderHeaderContentPrice price={100} currency="MAD" />
        </View>
    );
}

export default OrderHeaderContent;

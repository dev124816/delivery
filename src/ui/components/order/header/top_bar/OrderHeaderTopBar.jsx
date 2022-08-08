import React from 'react';
import {View} from 'react-native';
import OrderHeaderTopBarBackButton from './OrderHeaderTopBarBackButton';
import OrderHeaderTopBarTitle from './OrderHeaderTopBarTitle';
import $ from '../../../../style';


function OrderHeaderTopBar(props) {
    return (
        <View style={[$.w100, $.flexR, $.center, $.mb4]}>
            <OrderHeaderTopBarBackButton />
            <OrderHeaderTopBarTitle />
        </View>
    );
}

export default OrderHeaderTopBar;

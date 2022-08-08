import React from 'react';
import {View} from 'react-native';
import ProfileBodyHistoryOrderProductName from './ProfileBodyHistoryOrderProductName';
import ProfileBodyHistoryOrderProductPrice from './price/ProfileBodyHistoryOrderProductPrice';
import $ from '../../../../../../style';


function ProfileBodyHistoryOrderProduct(props) {
    return (
        <View key={props.id} style={[$.flexR, $.jusBetween]}>
            <ProfileBodyHistoryOrderProductName name={props.name} quantity={props.quantity} />
            <ProfileBodyHistoryOrderProductPrice price={props.price} currency={props.currency} />
        </View>
    );
}

export default ProfileBodyHistoryOrderProduct;

import React from 'react';
import {Text} from 'react-native';
import ProfileBodyHistoryOrderProductPriceCurrency from './ProfileBodyHistoryOrderProductPriceCurrency';
import $ from '../../../../../../../style';


function ProfileBodyHistoryOrderProductPrice(props) {
    return (
        <Text style={$.terC}>
            {props.price} <ProfileBodyHistoryOrderProductPriceCurrency currency={props.currency} />
        </Text>
    );
}

export default ProfileBodyHistoryOrderProductPrice;

import React from 'react';
import {Text} from 'react-native';
import HomeBodyProductCurrency from './HomeBodyProductCurrency';
import $ from '../../../../../../style.js';


function HomeBodyProductPrice(props) {
    return (
        <Text style={[{fontSize: 20}, $.priC, $.fWBold]}>
            {props.price} <HomeBodyProductCurrency currency={props.currency} />
        </Text>
    );
}

export default HomeBodyProductPrice;

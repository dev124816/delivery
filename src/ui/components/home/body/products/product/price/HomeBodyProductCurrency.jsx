import React from 'react';
import {Text} from 'react-native';
import $ from '../../../../../../style.js';


function HomeBodyProductCurrency(props) {
    return <Text style={[$.accC, $.fWSemi]}>{props.currency}</Text>;
}

export default HomeBodyProductCurrency;

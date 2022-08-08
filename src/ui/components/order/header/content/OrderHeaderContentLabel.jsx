import React from 'react';
import {Text} from 'react-native';
import $ from '../../../../style';


function OrderHeaderContentLabel(props) {
    return (
        <Text style={[{fontSize: 16}, $.priC, $.fWSemi]}>Total:</Text>
    );
}

export default OrderHeaderContentLabel;

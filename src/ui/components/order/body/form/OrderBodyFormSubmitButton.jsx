import React from 'react';
import Button from '../../../Button';
import $ from '../../../../style';


function OrderBodyFormSubmitButton(props) {
    return <Button
        style={[$.accBg, $.priBR, $.priS, $.center, $.px2, $.py1, $.mt3]} 
        textStyle={[$.priC, $.fWSemi]}
        title={props.title} 
        onPress={props.onPress}
    />;
}

export default OrderBodyFormSubmitButton;

import React from 'react';
import Button from '../../../../Button';
import $ from '../../../../../style';


function ProfileBodyAccountFormSubmitButton(props) {
    return <Button
        style={[$.accBg, $.priBR, $.priS, $.center, $.px2, $.py1, $.mt3, props.style]} 
        iconStyle={[$.flex, $.center, $.flexR]}
        textStyle={[$.priC, $.fWSemi, props.textStyle]}
        title={props.title} 
        onPress={props.onPress}
    />;
}

export default ProfileBodyAccountFormSubmitButton;

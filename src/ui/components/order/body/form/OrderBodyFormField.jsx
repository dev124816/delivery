import React from 'react';
import Field from '../../../Field';
import $ from '../../../../style';


function OrderBodyFormField(props) {
    return <Field 
        labelStyle={[$.priC, $.fWSemi]}
        style={[{height: 40}, $.inputBBot, $.mb1]}
        label={props.label}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
        textContentType={props.textContentType}
        maxLength={props.maxLength}
        secureTextEntry={props.secureTextEntry}
        underlineColorAndroid={props.underlineColorAndroid}
        onChangeText={props.onChangeText}
    />;
}

export default OrderBodyFormField;

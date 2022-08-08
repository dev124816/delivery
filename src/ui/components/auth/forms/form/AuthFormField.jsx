import React from 'react';
import Field from '../../../Field';
import $ from '../../../../style.js';


function AuthFormField(props) {
    return <Field 
        labelStyle={[{fontSize: 13}, $.priC, $.fWSemi]}
        style={[{height: 40, fontSize: 13}, $.inputBBot, $.mb1]}
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

export default AuthFormField;

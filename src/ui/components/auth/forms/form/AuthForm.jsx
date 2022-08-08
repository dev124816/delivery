import React from 'react';
import {View} from 'react-native';
import AuthFormField from './AuthFormField';
import AuthFormSubmitButton from './AuthFormSubmitButton';
import $ from '../../../../style';


function AuthForm(props) {
    return (
        <View style={[$.flex, $.overflow]}>
            {props.fields.map((field, index) => {
                return (
                    <AuthFormField 
                        key={index}
                        label={field.label}
                        placeholder={field.placeholder}
                        keyboardType={field.keyboardType}
                        textContentType={field.type}
                        maxLength={field.maxLength}
                        secureTextEntry={field.secureTextEntry}
                        underlineColorAndroid={field.underlineColorAndroid}
                        onChangeText={field.onChangeText}
                    />
                );
            })}
            <AuthFormSubmitButton 
                title={props.submitButtonTitle} 
                onPress={props.onSubmit} 
            />
        </View>
    );
}

export default AuthForm;

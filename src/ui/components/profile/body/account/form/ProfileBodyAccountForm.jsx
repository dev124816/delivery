import React from 'react';
import {View} from 'react-native';
import ProfileBodyAccountFormField from './ProfileBodyAccountFormField';
import ProfileBodyAccountFormSubmitButton from './ProfileBodyAccountFormSubmitButton';
import $ from '../../../../../style';


function ProfileBodyAccountForm(props) {
    return (
        <View style={$.mb5}>
            {props.fields.map((field, index) => {
                return (
                    <ProfileBodyAccountFormField 
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
            <ProfileBodyAccountFormSubmitButton 
                title={props.submitButtonTitle} 
                onPress={props.onSubmit} 
            />
        </View>
    );
}

export default ProfileBodyAccountForm;

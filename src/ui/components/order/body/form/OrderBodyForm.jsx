import React from 'react';
import {View} from 'react-native';
import OrderBodyFormField from './OrderBodyFormField';
import OrderBodyFormSubmitButton from './OrderBodyFormSubmitButton';
import $ from '../../../../style';


function OrderBodyForm(props) {
    return (
        <View style={[$.px3, $.py4]}>
            {props.fields.map((field, index) => {
                return (
                    <OrderBodyFormField 
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
            <OrderBodyFormSubmitButton
                title={props.submitButtonTitle} 
                onPress={props.onSubmit} 
            />
        </View>
    );
}
  
export default OrderBodyForm;

import React from 'react';
import {View, Text, TextInput} from 'react-native';


function Field(props) {
    return (
        <View key={props.id} style={props.containerStyle}>
            <Text style={props.labelStyle}>{props.label}</Text>
            <TextInput 
                style={props.style} 
                placeholder={props.placeholder}
                keyboardType={props.keyboardType}
                textContentType={props.textContentType}
                maxLength={props.maxLength}
                secureTextEntry={props.secureTextEntry}
                underlineColorAndroid={props.underlineColorAndroid}
                defaultValue={props.value}
                onChangeText={props.onChangeText}
            />
        </View>
    )
}

export default Field;

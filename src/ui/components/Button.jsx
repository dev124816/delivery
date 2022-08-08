import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import $ from '../style.js';


function Button(props) {
    const getContent = () => {
        if (props.image) {
            return <Image style={props.imageStyle} source={props.image} />;
        }
        if (props.icon) {
            return (
                <View style={props.iconStyle}>
                    {props.icon}
                    <Text style={props.textStyle}>{props.title}</Text>
                </View>
            );
        }
        return <Text style={props.textStyle}>{props.title}</Text>
    }

    return (
        <Pressable style={props.style} onPress={props.onPress}>
            {getContent()}
        </Pressable>
    );
}

export default Button;

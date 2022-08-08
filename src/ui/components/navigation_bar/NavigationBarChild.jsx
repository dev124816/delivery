import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../Button';
import $ from '../../style.js';


function NavigationBarChild(props) {
    return (
        <View style={[$.flex, $.center]}>
            <Button 
                style={props.special ? [{width: 50, height: 50, position: 'relative', bottom: 25, borderRadius: 25}, $.flex, $.accBg, $.priS, $.center] : {}}
                iconStyle={[$.flex, $.center, $.flexR]}
                icon={<Icon style={props.special ? $.priC : (props.active ? $.accC : $.terC)} name={props.iconName} size={20} />}
                onPress={props.onPress}
            /> 
        </View>
    );
}

export default NavigationBarChild;

import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../../Button';
import $ from '../../../../style.js';


function CartHeaderBackButton(props) {
    const navigation = useNavigation();

    return <Button 
        style={[{width: 40, height: 40}, $.priS, $.priBR, $.center]}
        iconStyle={[$.flex, $.center, $.flexR]}
        icon={<Icon style={$.secC} name="arrow-back" size={20} />} 
        onPress={(event) => navigation.goBack()} 
    />;
}

export default CartHeaderBackButton;

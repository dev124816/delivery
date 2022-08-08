import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../Button';
import $ from '../../../style.js';


function ProductBodyAddToCartButton(props) {
    return (
        <View style={[$.flex, $.center]}>
            <Button
                style={[{height: 40, width: 150}, $.accBg, $.alignEnd, $.priBR, $.priS, $.flexR, $.center]} 
                iconStyle={[$.flex, $.center, $.flexR]}
                textStyle={[{fontSize: 12}, $.priC, $.fWSemi]}
                icon={<Icon style={[$.priC, $.mr0]} name="add" size={20} />}
                title="Ajouter au panier"
                onPress={props.onPress}
            />
        </View>
    );
}

export default ProductBodyAddToCartButton;

import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../../../../Button';
import $ from '../../../../../../style.js';


function CartBodyProductQuantityIncreaseButton(props) {
    return <Button
        iconStyle={[$.flex, $.center, $.flexR]}
        icon={<Icon style={$.priC} name="add" size={15} />}
        onPress={props.onPress} 
    />;
}

export default CartBodyProductQuantityIncreaseButton;

import React from 'react'
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {removeProductFromCart} from '../../../../../redux/actions.js';
import Button from '../../../../Button';
import $ from '../../../../../style.js';


function CartBodyProductRemoveButton(props) {
    return <Button 
        icon={<Icon style={$.terC} name="close-outline" size={20} />}
        onPress={(event) => props.removeProductFromCart(props.id)}
    />
}

export default connect(null, (dispatch) => {
    return {
        removeProductFromCart: (id) => {
            removeProductFromCart.payload = id;
            dispatch(removeProductFromCart);
        }
    };
})(CartBodyProductRemoveButton);

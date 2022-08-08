import React from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import Button from './Button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {setModal} from '../redux/actions.js';
import $ from '../style';


function Modal(props) {
    return (
        <View style={[props.modal.visibility ? $.show : $.hide, $.accBg, $.w100, $.h100, $.center, $.zIndex]}>
            <View style={[{width: '80%'}, $.priS, $.priBR, $.priBg]}>
                <Button 
                    style={[{width: 30, height: 30}, $.alignEnd, $.dangerBg, $.priTopRightBR, $.center, $.px0, $.py0]}
                    iconStyle={[$.flex, $.center, $.flexR]}
                    icon={<Icon style={$.secC} name="close" size={19} />}
                    onPress={(event) => props.setModal({
                        visibility: false,
                        content: null
                    })}
                />
                {props.modal.content}
            </View>
        </View>
    );
}

export default connect((state) => {
    return {
        modal: state.modal
    }
}, (dispatch) => {
    return {
        setModal: (modal) => {
            setModal.payload.visibility = modal.visibility;
            setModal.payload.content = modal.content;
            dispatch(setModal);
        }
    }
})(Modal);

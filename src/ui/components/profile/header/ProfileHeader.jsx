import React, {useEffect} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {View} from 'react-native';
import ProfileHeaderTopBar from './top_bar/ProfileHeaderTopBar';
import ProfileHeaderContent from './content/ProfileHeaderContent';
import {fillPhone} from '../../../redux/actions.js';
import config from '../../../config.json';
import $ from '../../../style.js';


function ProfileHeader(props) {
    useEffect(() => {
        axios.get(config.url + '/api/profile', {
            headers: {
                'Authorization': `Bearer ${props.token}`
            }
        }).then((response) => props.fillPhone(response.data.phone));
    }, []);

    return (
        <View style={[$.priBg, $.px3, $.py4]}>
            <ProfileHeaderTopBar />
            <ProfileHeaderContent phone={props.phone} />
        </View>
    );
}

export default connect((state) => {
    return {
        phone: state.profile.phone,
        token: state.token
    };
}, (dispatch) => {
    return {
        fillPhone: (phone) => {
            fillPhone.payload = phone;
            dispatch(fillPhone);
        }
    };
})(ProfileHeader);

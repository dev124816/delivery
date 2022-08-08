import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {View} from 'react-native';
import ProfileBodyHistoryOrder from './order/ProfileBodyHistoryOrder';
import config from '../../../../config.json';
import $ from '../../../../style.js';


function ProfileBodyHistory(props) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get(config.url + '/api/orders', {
            headers: {
                'Authorization': `Bearer ${props.token}`
            }
        }).then((response) => setOrders(response.data));
    }, []);

    return (
        <View style={[$.flex, $.px3, $.py4, $.mb4, $.overflow]}>
            {orders.map((order, index) => {
                return (
                    <ProfileBodyHistoryOrder
                        key={index}
                        id={order?.id} 
                        orderProducts={order?.products}
                    />
                );
            })}
        </View>
    );
}

export default connect((state) => {
    return {
        token: state.token
    };
})(ProfileBodyHistory);

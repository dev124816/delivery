import React from 'react';
import {Text} from 'react-native';
import $ from '../../../../../style.js';


function HomeBodyProductName(props) {
    return <Text style={[{fontSize: 20}, $.priC, $.fWSemi, $.mb1, $.cap]}>{props.name}</Text>;
}

export default HomeBodyProductName;

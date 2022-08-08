import React from 'react';
import {Text} from 'react-native';
import $ from '../../../../../style.js';


function HomeBodyProductDescription(props) {
    return <Text style={[{fontSize: 13, width: 150}, $.terC, $.fWSemi, $.mb1]}>{String(props.description).substring(0, 30)}...</Text>;
}

export default HomeBodyProductDescription;

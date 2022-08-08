import React from 'react';
import {Text} from 'react-native';
import $ from '../../../../../style.js';


function HomeBodyCategoryName(props) {
    return <Text style={[{fontSize: 12}, $.priC, $.fWSemi, $.cap]}>{props.name}</Text>;
}

export default HomeBodyCategoryName;

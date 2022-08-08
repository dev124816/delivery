import React from 'react';
import {View} from 'react-native';
import HomeHeaderProfileButton from './HomeHeaderProfileButton';
import $ from '../../../../style.js';


function HomeTopBar(props) {
    return (
        <View style={[$.w100, $.flexR, $.jusEnd, $.mb3]}>
            <HomeHeaderProfileButton />
        </View>
    );
}

export default HomeTopBar;

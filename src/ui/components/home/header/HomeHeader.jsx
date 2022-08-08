import React from 'react';
import {View} from 'react-native';
import HomeHeaderTopBar from './top_bar/HomeHeaderTopBar';
import HomeHeaderTitle from './HomeHeaderTitle';
import HomeHeaderFilterBar from './filter_bar/HomeHeaderFilterBar';
import $ from '../../../style.js';


function HomeHeader(props) {
    return (
        <View style={[$.px3, $.my3]}>
            <HomeHeaderTopBar />
            <HomeHeaderTitle />
            <HomeHeaderFilterBar />
        </View>
    );
}

export default HomeHeader;

import React from 'react';
import {View} from 'react-native';
import HomeHeaderFilterSearchBar from './HomeHeaderSearchBar';
import $ from '../../../../style.js';


function HomeHeaderFilterBar(props) {
    return (
        <View style={$.flexR}>
            <HomeHeaderFilterSearchBar />
        </View>
    );
}

export default HomeHeaderFilterBar;

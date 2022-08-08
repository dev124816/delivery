import React from 'react';
import {View} from 'react-native';
import HomeHeader from './header/HomeHeader';
import HomeBody from './body/HomeBody';
import NavigationBar from '../navigation_bar/NavigationBar';
import $ from '../../style.js';


function Home(props) {
    return (
        <View style={[$.secBg, $.flex]}>
            <HomeHeader />
            <HomeBody />
            <NavigationBar />
        </View>
    );
}

export default Home;

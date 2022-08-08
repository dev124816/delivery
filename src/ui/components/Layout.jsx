import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Modal from './Modal';
import $ from '../style.js';


function Layout(props) {
    return (
        <SafeAreaView style={[$.flex, $.overflow]}>
            <StatusBar 
                backgroundColor={props.statusBarBackgroundColor}
                barStyle={props.statusBarStyle}
                animated={props.statusBarAnimated}
            />
            <Modal />
            {props.children}
        </SafeAreaView>
    );
}

export default Layout;

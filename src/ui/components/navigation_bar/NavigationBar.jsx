import React from 'react';
import {View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import NavigationBarChild from './NavigationBarChild';
import $ from '../../style.js';


function NavigationBar(props) {
    var routes = [];
    
    if (props.admin) {
        routes = [
            {  
                name: '/app',
                iconName: 'cog-outline'
            },
            {  
                name: '/',
                iconName: 'albums-outline'
            }, {
                name: '/database',
                iconName: 'construct-outline'
            }
        ];    
    } else {
        routes = [
            {  
                name: '/',
                iconName: 'home-outline'
            },
            {  
                name: '/cart',
                iconName: 'cart-outline'
            }, {
                name: '/profile',
                iconName: 'person-outline'
            }
        ];    
    }

    const navigation = useNavigation();
    const currentRoute = useRoute();

    return (
        <View style={[{height: 50}, $.w100, $.priBg, $.priBR, $.priS, $.flexR, $.bottom]}>
            {routes.map((route, index) => {
                return <NavigationBarChild 
                    key={index} 
                    onPress={(event) => navigation.navigate(route.name)}
                    iconName={route.iconName}
                    active={route.name === currentRoute.name}
                    special={route.name === '/cart'}
                />;
            })}
        </View>
    );
}

export default NavigationBar;

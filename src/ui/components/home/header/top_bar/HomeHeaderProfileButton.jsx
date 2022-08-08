import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Button from '../../../Button';
import $ from '../../../../style.js';


function HomeHeaderProfileButton(props) {
    const navigation = useNavigation();

    return <Button 
        style={[{width: 40, height: 40}, $.priS, $.priBR]} 
        imageStyle={[{width: 40, height: 40}, $.priBR]} 
        image={require('../../../../assets/avatar.png')} 
        onPress={(event) => navigation.navigate('/profile')}
    />;
}

export default HomeHeaderProfileButton;

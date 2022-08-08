import React from 'react';
import {Text, View} from 'react-native';
import $ from '../../../../style.js';


function ProfileHeaderContentPhone(props) {
    return (
        <View style={$.center}>
            <Text style={[{fontSize: 16}, $.priC, $.fWSemi]}>Téléphone</Text>
            <Text style={[$.terC, $.fWSemi]}>{props.phone}</Text>
        </View>
    );
}

export default ProfileHeaderContentPhone;

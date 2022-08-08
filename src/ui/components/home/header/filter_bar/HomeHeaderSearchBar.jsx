import React from 'react';
import {TextInput, View} from 'react-native';
import {connect} from 'react-redux';
import {fillHomeSearch} from '../../../../redux/actions.js';
import Icon from 'react-native-vector-icons/Ionicons';
import $ from '../../../../style.js';


function HomeHeaderFilterSearchBar(props) {
    return (
        <View style={[$.terBg, $.priBR, $.flex, $.flexR, $.center, $.mr2]}>
            <Icon style={$.priC} name="search" size={20} style={$.mx1} />
            <TextInput 
                style={[{height: 40}, $.quaC, $.priBR, $.flex]} 
                placeholder="Rechercher de la nourriture"
                underlineColorAndroid="transparent"
                onChangeText={(value) => props.fillHomeSearch(value)}
            />
        </View>
    );
}

export default connect(null, (dispatch) => {
    return {
        fillHomeSearch: (value) => {
            fillHomeSearch.payload = value;
            dispatch(fillHomeSearch);
        }
    };
})(HomeHeaderFilterSearchBar);

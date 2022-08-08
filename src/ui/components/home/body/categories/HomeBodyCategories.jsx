import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {View} from 'react-native'
import {connect} from 'react-redux';
import {fillHomeCategory} from '../../../../redux/actions.js';
import HomeBodyCategory from './category/HomeBodyCategory';
import config from '../../../../config.json';
import $ from '../../../../style.js';


function HomeBodyCategories(props) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(config.url + '/api/categories', {
            headers: {
                'Authorization': `Bearer ${props.token}`
            }
        })
        .then((response) => {
            setCategories(response.data);
            props.fillHomeCategory(response.data[0].name);
        }).catch((error) => console.log(error));
    }, []);

    return (
        <View style={[$.flexR, $.mb4]}>
            {categories.map((category) => {
                return (
                    <HomeBodyCategory
                        key={category?.id} 
                        id={category?.id}
                        image={category?.image}        
                        name={category?.name}
                        onPress={(event) => props.fillHomeCategory(category?.name)}        
                        active={category?.name === props.category}
                    />  
                );  
            })}
        </View>
    );
}

export default connect((state) => {
    return {
        category: state.home.category,
        token: state.token
    };
}, (dispatch) => {
    return {
        fillHomeCategory: (category) => {
            fillHomeCategory.payload = category;
            dispatch(fillHomeCategory);
        }
    };
})(HomeBodyCategories);

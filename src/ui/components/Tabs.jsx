import React, {useState} from 'react';
import {View, Pressable} from 'react-native';
import $ from '../style.js';


function Tabs(props) {
    const [index, setIndex] = useState(props.initialIndex);

    return (
        <View style={[$.flex, $.overflow, props.containerStyle]}>
            <View style={props.headersContainerStyle}>
                {props.headers.map((header, headerIndex) => {
                    return (
                        <Pressable 
                            key={headerIndex} 
                            style={[$.flex, (headerIndex === index ? props.activeHeaderStyle : {})]}
                            onPress={(event) => setIndex(headerIndex)} 
                        >
                            {header}
                        </Pressable>
                    );
                })}
            </View>
            <View style={[$.flex, props.style]}>
                {props.children[index]}
            </View>
        </View>
    );
}

export default Tabs;

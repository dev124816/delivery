import React, {useState} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {View, Text} from 'react-native';
import Tabs from '../../Tabs';
import AuthFormsTabHeader from './AuthFormsTabHeader';
import AuthForm from './form/AuthForm';
import {setModal, fillToken} from '../../../redux/actions.js';
import config from '../../../config.json';
import $ from '../../../style.js';


function AuthForms(props) {
    const navigation = useNavigation();

    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const login = (event) => {
        axios.post(config.url + '/api/login', {
            phone,
            password
        }).then((response) => {
            props.fillToken(response.data.token);

            if (response.data.role === 'admin') {
                navigation.navigate('/admin');            
            } else {
                navigation.navigate('/');            
            }
        }).catch((error) => {
            props.setModal({
                visibility: true,
                content: (
                    <View style={[$.flex, $.center, $.w100, $.px3, $.py4]}>
                        <Text style={[$.priC, $.fWSemi]}>Votre téléphone ou mot de passe n'est pas correct !</Text>
                    </View>
                )
            });
        });
    };

    const signup = (event) => {
        axios.post(config.url + '/api/signup', {
            phone,
            password,
            password_confirmation: passwordConfirmation
        }).then((response) => {
            props.fillToken(response.data.token);
            
            navigation.navigate('/');            
        });
    };

    return (
        <Tabs 
            initialIndex={0}
            containerStyle={$.px2}
            headersContainerStyle={[{height: 75}, $.priS, $.flexR, $.mb4]}
            activeHeaderStyle={{borderBottomWidth: 2, borderBottomColor: '#FAC32D'}}
            headers={[
                <AuthFormsTabHeader title="Connexion" />,
                <AuthFormsTabHeader title="S'inscrire" />
            ]}
        >
            <AuthForm
                fields={[
                    {
                        label: 'Téléphone',
                        placeholder: 'Votre numéro de téléphone',
                        keyboardType: 'numeric',
                        textContentType: 'telephoneNumber',
                        maxLength: 12,
                        secureTextEntry: false,
                        underlineColorAndroid: "transparent",
                        onChangeText: setPhone
                    },
                    {
                        label: 'Mot de Passe',
                        placeholder: 'Votre mot de passe',
                        keyboardType: 'default',
                        textContentType: 'password',
                        maxLength: 18,
                        secureTextEntry: true,
                        underlineColorAndroid: "transparent",
                        onChangeText: setPassword
                    }
                ]}        
                submitButtonTitle="Connexion"
                onSubmit={login}
            />
            <AuthForm 
                fields={[
                    {
                        label: 'Téléphone',
                        placeholder: 'Votre numéro de téléphone',
                        keyboardType: 'numeric',
                        textContentType: 'telephoneNumber',
                        maxLength: 12,
                        secureTextEntry: false,
                        underlineColorAndroid: "transparent",
                        onChangeText: setPhone
                    }, {
                        label: 'Mot de Passe',
                        placeholder: 'Votre mot de passe',
                        keyboardType: 'default',
                        textContentType: 'newPassword',
                        maxLength: 18,
                        secureTextEntry: true,
                        underlineColorAndroid: "transparent",
                        onChangeText: setPassword
                    }, {
                        label: 'Confirmer Mot de Passe',
                        placeholder: 'Confirmer votre mot de passe',
                        keyboardType: 'default',
                        textContentType: 'newPassword',
                        maxLength: 18,
                        secureTextEntry: true,
                        underlineColorAndroid: "transparent",
                        onChangeText: setPasswordConfirmation
                    }
                ]}   
                submitButtonTitle="S'inscrire"
                onSubmit={signup}
            />
        </Tabs>
    );
}

export default connect(null, (dispatch) => {
    return {
        setModal: (modal) => {
            setModal.payload.visibility = modal.visibility;
            setModal.payload.content = modal.content;
            dispatch(setModal);
        },
        fillToken: (token) => {
            fillToken.payload = token;
            dispatch(fillToken);
        }
    };
})(AuthForms);

import React, {useState} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {View, Text} from 'react-native';
import ProfileBodyAccountForm from './form/ProfileBodyAccountForm';
import ProfileBodyAccountFormSubmitButton from './form/ProfileBodyAccountFormSubmitButton';
import {setModal, fillPhone, fillToken} from '../../../../redux/actions.js';
import config from '../../../../config.json';
import $ from '../../../../style';


function ProfileBodyAccount(props) {
    const [password, setPassword] = useState('');
    const [newPhone, setNewPhone] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const navigation = useNavigation();

    const updatePhone = (event) => {
        axios.put(config.url + '/api/update_phone', {
            password,
            new_phone: newPhone
        }, {
            headers: {
                'Authorization': `Bearer ${props.token}`
            }
        }).then((response) => {
            props.fillPhone(response.data.new_phone);
            props.setModal({
                visibility: true,
                content: (
                    <View style={[$.center, $.w100, $.px3, $.py4]}>
                        <Text style={[$.priC, $.fWSemi]}>Votre téléphone à été changé !</Text>
                    </View>
                )
            })
        });
    }
    
    const updatePassword = (event) => {
        axios.put(config.url + '/api/update_password', {
            password,
            new_password: newPassword
        }, {
            headers: {
                'Authorization': `Bearer ${props.token}`
            }
        }).then((response) => {
            props.fillToken(response.data.new_token);
            props.setModal({
                visibility: true,
                content: (
                    <View style={[$.center, $.w100, $.px3, $.py4]}>
                        <Text style={[$.priC, $.fWSemi]}>Votre mot de passe à été changé !</Text>
                    </View>
                )
            });
        });
    }
    
    const logout = (event) => {
        axios.post(config.url + '/api/logout', {}, {
            headers: {
                'Authorization': `Bearer ${props.token}`
            }
        }).then((response) => {
            props.fillToken('');
            navigation.navigate('/auth');
        });
    }

    return (
        <View style={[$.px3, $.py4, $.mb4, $.overflow]}>
            <ProfileBodyAccountForm
                fields={[
                    {
                        label: 'Mot de passe',
                        placeholder: 'Votre mot de passe',
                        keyboardType: 'default',
                        textContentType: 'password',
                        maxLength: 18,
                        secureTextEntry: true,
                        underlineColorAndroid: "transparent",
                        onChangeText: setPassword
                    },
                    {
                        label: 'Nouveau Téléphone',
                        placeholder: 'Votre nouveau numéro de téléphone',
                        keyboardType: 'numeric',
                        textContentType: 'telephoneNumber',
                        maxLength: 12,
                        secureTextEntry: false,
                        underlineColorAndroid: "transparent",
                        onChangeText: setNewPhone
                    }
                ]}        
                submitButtonTitle="Modifier mon téléphone"
                onSubmit={updatePhone}
            />
            <ProfileBodyAccountForm 
                fields={[
                    {
                        label: 'Mot de passe',
                        placeholder: 'Votre mot de passe',
                        keyboardType: 'default',
                        textContentType: 'password',
                        maxLength: 18,
                        secureTextEntry: true,
                        underlineColorAndroid: "transparent",
                        onChangeText: setPassword
                    }, {
                        label: 'Nouveau Mot de Passe',
                        placeholder: 'Votre nouveau mot de passe',
                        keyboardType: 'default',
                        textContentType: 'newPassword',
                        maxLength: 18,
                        secureTextEntry: true,
                        underlineColorAndroid: "transparent",
                        onChangeText: setNewPassword
                    }
                ]}   
                submitButtonTitle="Modifier mon mot de passe"
                onSubmit={updatePassword}
            />
            <ProfileBodyAccountFormSubmitButton 
                style={$.dangerBg}
                textStyle={$.secC}
                title="Déconnexion"
                onPress={logout}
            />
        </View>
    );
}

export default connect((state) => {
    return {
        token: state.token
    };
}, (dispatch) => {
    return {
        setModal: (modal) => {
            setModal.payload.visibility = modal.visibility;
            setModal.payload.content = modal.content;
            dispatch(setModal);
        },
        fillPhone: (phone) => {
            fillPhone.payload = phone;
            dispatch(fillPhone);
        },
        fillToken: (token) => {
            fillToken.payload = token;
            dispatch(token);
        }
    }
})(ProfileBodyAccount);

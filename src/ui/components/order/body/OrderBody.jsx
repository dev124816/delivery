import React, {useState} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import OrderBodyForm from './form/OrderBodyForm';
import Button from '../../Button';
import {setModal} from '../../../redux/actions.js';
import config from '../../../config.json';
import $ from '../../../style.js';


function OrderBody(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [city, setCity] = useState('');

    const navigation = useNavigation();

    const order = (event) => {
        if (
            firstName !== ''
            && lastName !== ''
            && address !== ''
            && zipCode !== ''
            && city !== ''
        ) {
            axios.post(config.url + '/api/orders', {
                first_name: firstName,
                last_name: lastName,
                address,
                zip_code: zipCode,
                city,
                cart: [
                    ...props.products.map((product) => {
                        return {
                            product_id: product.id,
                            quantity: product.quantity
                        };
                    })
                ] 
            }, {
                headers: {
                    'Authorization': `Bearer ${props.token}`
                }
            }).then((response) => {
                props.setModal({
                    visibility: true,
                    content: (
                        <View style={[$.center, $.w100, $.px3, $.py4]}>
                            <Text style={[$.priC, $.fWSemi, $.mb3]}>Votre commande numéro {response.data.id} à été enregistrée !</Text>
                            <Button 
                                style={[$.accBg, $.priBR, $.priS, $.center, $.px2, $.py1]} 
                                textStyle={[$.priC, $.fWSemi]} 
                                title="Confirmer" 
                                onPress={(event) => navigation.navigate('/')}
                            />
                        </View>
                    )
                });
            });
        }
    }

    return (
        <View>
            <OrderBodyForm 
                fields={[
                    {
                        label: 'Prénom',
                        placeholder: 'Votre prénom',
                        keyboardType: 'default',
                        textContentType: 'name',
                        maxLength: 30,
                        secureTextEntry: false,
                        underlineColorAndroid: "transparent",
                        onChangeText: setFirstName
                    },
                    {
                        label: 'Nom',
                        placeholder: 'Votre nom',
                        keyboardType: 'default',
                        textContentType: 'familyName',
                        maxLength: 30,
                        secureTextEntry: false,
                        underlineColorAndroid: "transparent",
                        onChangeText: setLastName
                    },
                    {
                        label: 'Adresse',
                        placeholder: 'Votre adresse',
                        keyboardType: 'default',
                        textContentType: 'fullStreetAddress',
                        maxLength: 100,
                        secureTextEntry: false,
                        underlineColorAndroid: "transparent",
                        onChangeText: setAddress
                    },
                    {
                        label: 'Code Postal',
                        placeholder: 'Votre code postal',
                        keyboardType: 'default',
                        textContentType: 'postalCode',
                        maxLength: 30,
                        secureTextEntry: false,
                        underlineColorAndroid: "transparent",
                        onChangeText: setZipCode
                    },
                    {
                        label: 'Ville',
                        placeholder: 'Votre ville',
                        keyboardType: 'default',
                        textContentType: 'addressCity',
                        maxLength: 50,
                        secureTextEntry: false,
                        underlineColorAndroid: "transparent",
                        onChangeText: setCity
                    }
                ]}
                submitButtonTitle="Commander"
                onSubmit={order}
            />
        </View>
    )
}

export default connect((state) => {
    return {
        products: state.products.filter((product) => product.inCart),
        token: state.token
    }
}, (dispatch) => {
    return {
        setModal: (modal) => {
            setModal.payload.visibility = modal.visibility;
            setModal.payload.content = modal.content;
        }
    };
})(OrderBody);

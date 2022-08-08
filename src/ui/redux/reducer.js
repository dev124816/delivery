import {
    _fillHomeCategory,
    _fillHomeSearch,
    _fillProducts,
    _fillPhone,
    _fillToken,
    _increaseProductQuantity,
    _decreaseProductQuantity,
    _addProductToCart,
    _removeProductFromCart,
    _setModal
} from './actions.js';


const data = {
    profile: {
        phone: ''
    },
    home: {
        category: '',
        search: ''
    },
    products: [],
    cart: {
        totalPrice: 0.0,
        currency: 'MAD'
    },
    modal: {
        visibility: false,
        content: null
    },
    token: ''   
};

export default function reducer(state=data, action) {
    const product = state.products.filter((product) => product?.id === action.payload)[0];

    switch (action.type) {
        case _fillHomeCategory:
            return {
                ...state,
                home: {
                    ...state.home,
                    category: action.payload
                }
            };

        case _fillHomeSearch:
            return {
                ...state,
                home: {
                    ...state.home,
                    search: action.payload
                }
            };
        
        case _fillProducts:
            return {
                ...state,
                products: [
                    ...action.payload
                ]
            };

        case _fillPhone:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    phone: action.payload
                }
            };

        case _fillToken:
            return {
                ...state,
                token: action.payload
            };
            
        case _increaseProductQuantity:
            return {
                ...state,
                products: [
                    ...state.products.map((product) => {
                        if (product?.id === action.payload) {
                            product = {
                                ...product,
                                quantity: product?.quantity + 1
                            }
                        }
                        return product;
                    })
                ],
                cart: {
                    ...state.cart,
                    totalPrice: product?.inCart ? (Number(state.cart.totalPrice) + Number(product?.price)).toFixed(2) : state.cart.totalPrice   
                }
            };

        case _decreaseProductQuantity:            
            return {
                ...state,
                products: [
                    ...state.products.map((product) => {
                        if (product?.id === action.payload && product?.quantity > 1) {
                            product = {
                                ...product,
                                quantity: product?.quantity - 1
                            }
                        }
                        return product;
                    })
                ],
                cart: {
                    ...state.cart,
                    totalPrice: (product?.quantity > 1 && product?.inCart) ? (Number(state.cart.totalPrice) - Number(product?.price)).toFixed(2) : state.cart.totalPrice   
                }
            };
        
        case _addProductToCart:
            return {
                ...state,
                products: [
                    ...state.products.map((product) => {
                        if (product?.id === action.payload) {
                            product = {
                                ...product,
                                inCart: true
                            }
                        } 
                        return product;
                    })
                ],
                cart: {
                    ...state.cart,
                    totalPrice: (Number(state.cart.totalPrice) + (Number(product?.price) * Number(product?.quantity))).toFixed(2)   
                }
            };

        case _removeProductFromCart:
            return {
                ...state,
                products: [
                    ...state.products.map((product) => {
                        if (product?.id === action.payload) {
                            product = {
                                ...product,
                                quantity: 1,
                                inCart: false
                            }
                        }
                        return product;
                    })
                ],
                cart: {
                    ...state.cart,
                    totalPrice: (Number(state.cart.totalPrice) - (Number(product?.price) * Number(product?.quantity))).toFixed(2)   
                }
            };

        case _setModal:
            return {
                ...state,
                modal: {
                    ...state.modal,
                    visibility: action.payload.visibility,
                    content: action.payload.content
                }
            };

        default:
            return state;
    }
}

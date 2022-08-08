import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import reducer from './redux/reducer.js';
import AuthScreen from './components/screens/AuthScreen';
import HomeScreen from './components/screens/HomeScreen';
import ProductScreen from './components/screens/ProductScreen';
import CartScreen from './components/screens/CartScreen';
import OrderScreen from './components/screens/OrderScreen';
import ProfileScreen from './components/screens/ProfileScreen';


const store = createStore(reducer);
const Stack = createStackNavigator();

function App(props) {
  return (
    <Provider store={store}>    
      <NavigationContainer>
        <Stack.Navigator initialRouteName="/auth">
          <Stack.Screen name="/auth" component={AuthScreen} options={{headerShown: false}} />
          <Stack.Screen name="/" component={HomeScreen} options={{headerShown: false}} />
          <Stack.Screen name="/product" component={ProductScreen} options={{headerShown: false}} />
          <Stack.Screen name="/cart" component={CartScreen} options={{headerShown: false}} />
          <Stack.Screen name="/order" component={OrderScreen} options={{headerShown: false}} />
          <Stack.Screen name="/profile" component={ProfileScreen} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;

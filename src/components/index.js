import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

export { default as Navbar } from './Navbar/Navbar';
export { default as Products } from './Products/Products';
export { default as Cart } from './Cart/Cart';
export { default as Checkout } from './CheckoutForm/Checkout/Checkout';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import UserList from "./components/UserList";
import store from "./reduxStore";

ReactDOM.render(<Provider store={store}>
    
    <UserList />
</Provider>,
 document.getElementById('root'));
registerServiceWorker();

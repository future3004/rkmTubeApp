import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HowTo from './routes/HowTo';
import { BrowserRouter, Route } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(

    <BrowserRouter >

      <div>

        <Route path="/" exact component={App}></Route>
        <Route path="/how-to" component={HowTo}></Route>

      </div>
    </BrowserRouter>

  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

//  <App />

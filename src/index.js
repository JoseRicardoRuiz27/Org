import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
//llamamos una constante root y tenemos nuestra libreria ReactDOM que obtiene 
//un createRoot que llama al primer div de indexhtml
root.render(
  //el .render es un metodo que va a recibir codigo de forma html
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// line 13 <app /> no es html lo estamos importando en la linea 4
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

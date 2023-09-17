import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import App from './App.jsx'
import './index.css'

//todo: poner en un archivo separado .env despues
const firebaseConfig = {
  apiKey: "AIzaSyAnEtXqQ3Ka1pzrMocUvNU5LZpE8bcj7ZI",
  authDomain: "iptecnology.firebaseapp.com",
  projectId: "iptecnology",
  storageBucket: "iptecnology.appspot.com",
  messagingSenderId: "786253216289",
  appId: "1:786253216289:web:61f4ab691bccdc3cf24160"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

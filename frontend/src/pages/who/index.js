import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api';


import './styles.css';
import heroesImg from '../../assets/Heroes.png';
import logoImg from '../../assets/Logo.svg';


export default function Who(){

     return(
        <div className="register-container">
        <div className="content">
        <section>
            <img src={logoImg} alt="Be the Hero"/>


    <h1>Sobre nós</h1>
    <p> Somos uma plataforma de interação entre voluntários e ONGS. 
    Destinada somente a ajuda , sem fins lucrativos.
    Para maiores informações entre em contato conosco.
    </p>

    <Link className=".back-link"     to="/">
         <FiArrowLeft size={16} color="#E02041"/>
         Voltar
     </Link>
     </section>
     <img src ={heroesImg} alt="Heroes"/>
     </div>
     </div>
);
}
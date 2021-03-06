import React, {useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import "./styles.css";
import {FiPower, FiTrash2} from 'react-icons/fi';
import api from '../../services/api';
import logoImg from '../../assets/Logo.svg';

export default function Profile(){
 const [incidents, setIncidents] = useState([]);
 const ongId = localStorage.getItem('ongId');
 const ongName = localStorage.getItem('ongName');

 useEffect(()=> {
     api.get('profile',{
         headers :{
             Authorization: ongId,
         }
     }).then (response =>{
        setIncidents(response.data);
     })
 }, [ongId]);

     async function handleDeleteIncidents(id){
       try {
           await api.delete(`incidents/${id}`,{
               headers :{
                   Authorization: ongId,
               }
           });
       } catch (err) {
           alert('Erro ao deletar caso, tente novamente.');
       }
     }


    return (
      <div className="profile-container">
        <header>
           <img src={logoImg} alt='Be the Hero'/>
           <span>Bem vinda,{ongName}  </span>
              <Link className="button" to ="/incidents/new">Cadastrar novo caso </Link>
              <button type ="button">
                  <FiPower size={18} color="#E02041"/>
              </button>

        </header>
        <h1>Casos cadastrados</h1>
        <ul>
        {incidents.map (incidents => (
            <li key={incidents.id}>
               <strong>CASO:</strong>
               <p>{incidents.title} </p>

               <strong>DESCRIÇÃO:</strong>
               <p> {incidents.description} </p>

               <strong>VALOR:</strong>
               <p>{Intl.NumberFormat('pt-BR', {style: 'currency',currency: 'BRL'})
               .format(incidents.value)} </p>

               <button onClick={() => handleDeleteIncidents(incidents.id)} type="buttton" >
                   <FiTrash2 size={20} color ="#a8a8b3"/>
               </button>
        
           </li>
        ))
        }
            
           
        </ul>

      </div>

    )
}
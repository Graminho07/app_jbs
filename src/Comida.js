import React from "react";
import comidaGif from './images/comidaGif.gif'
import { Link } from 'react-router-dom';

import { FaArrowLeft } from "react-icons/fa";

const Comida = () => {
    return (
        <div>
            <Link to="/" className="link"> <FaArrowLeft /> Voltar</Link>
            <img className='gif' src={comidaGif} alt='gif'/>

            <p className="titulo">Comida🍔</p>
            <p className="texto1">aqui vai uma lista de comidas para vc comer durante a gripe:</p>
        
            <ul>
                <li> <a className='lista' href="https://www.ifood.com.br/delivery/sao-jose-sc/saboreando-sopas-caldos-cremes-massas-e-batatas-barreiros/0450f01b-db00-414f-8454-eee951f9005f" rel="noopener noreferrer" target="_blank">Sopa e caldos</a> </li>
                <li> <a className='lista' href="https://www.ifood.com.br/delivery/sao-jose-sc/da-ilha-sucos-e-pasteis---real-parque-real-parque/05e9382a-e816-4e21-a5ef-6ba86d90907a" rel="noopener noreferrer" target="_blank">Sucos naturais</a> </li>
                <li> <a className='lista' href="https://www.ifood.com.br/delivery/sao-jose-sc/subway-kobrasol-sanduiches-delivery-kobrasol/dfafe07b-b099-44b1-8494-ce124a1e04cf" rel="noopener noreferrer" target="_blank">Sanduíche</a> </li>
            </ul>

            <p className="texto2">ps: se vc clicar em cada comida, vc será direcionada para o ifood da loja mais próxima da sua casa</p>
        </div>
    )
}

export default Comida;
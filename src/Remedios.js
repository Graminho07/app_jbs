import React from "react";
import remedioGif from './images/remedioGif.gif';
import './style/Remedio.css'
import { Link } from 'react-router-dom';

import { FaArrowLeft } from "react-icons/fa";

const Remedios = () => {
  return (
    <div>
        <Link to="/" className="link"> <FaArrowLeft /> Voltar</Link>
        <img className='gif' src={remedioGif} alt='gif'/>
        <p className="titulo">Remédios💊</p>

        <p className="texto1">aqui vai uma lista de remédio que podem ajudar a curar sua gripe:</p>
        <ul>
            <li> <a className='lista' href="https://www.panvel.com/panvel/dipirona-monoidratada-1g-10-comprimidos-neo-quimica-generico/p-624360" rel="noopener noreferrer" target="_blank">Dipirona</a> </li>
            <li> <a className='lista' href="https://www.panvel.com/panvel/antigripal-cimegripe-20-capsulas/p-921040" rel="noopener noreferrer" target="_blank">CimeGripe</a> </li>
            <li> <a className='lista' href="https://www.panvel.com/panvel/paracetamol-750mg-20-comprimidos-neo-quimica-generico/p-156550" rel="noopener noreferrer" target="_blank">Paracetamol</a> </li>
            <li> <a className='lista' href="https://www.panvel.com/panvel/ibuprofeno-100mg-ml-20ml-neoquimica-generico/p-532580" rel="noopener noreferrer" target="_blank">Ibuprofeno</a> </li>
        </ul>

        <p className="texto2">ps: se vc clicar em cada remédio, vc será direcionada para o site da farmácia mais perto da sua casa</p>
    </div>
  );
};

export default Remedios;
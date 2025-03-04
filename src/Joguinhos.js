import React from "react";
import { Link } from 'react-router-dom';
import joguinhosGif from './images/joguinhosGif.gif'

import { FaArrowLeft } from "react-icons/fa";

const Joguinhos = () =>{
    return (
        <div>
            <Link to="/" className="link"> <FaArrowLeft /> Voltar</Link>
            <img className='gif' src={joguinhosGif} alt='gif'/>

            <p className="titulo">Joguinhos🎮</p>
            <p className="texto1">aqui vai uma lista de joguinhos grátis para vc jogar:</p>
        
            <ul>
                <li> <a className='lista' href="https://store.epicgames.com/pt-BR/p/fall-guys" rel="noopener noreferrer" target="_blank">Fall guys</a> </li>
                <li> <a className='lista' href="https://store.steampowered.com/app/730/CounterStrike_2/" rel="noopener noreferrer" target="_blank">CS</a> </li>
                <li> <a className='lista' href="https://store.epicgames.com/pt-BR/p/destiny-2" rel="noopener noreferrer" target="_blank">Destiny 2</a> </li>
            </ul>

            <p className="texto2">ps: se vc clicar em cada jogo, vc será direcionada para sua respectiva plataforma, tanto na epicgames quanto na steam</p>
        </div>
    )
}

export default Joguinhos
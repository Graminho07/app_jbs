import React from "react";
import { Link } from 'react-router-dom';
import filmeGif from './images/filmeGif.gif'

import { FaArrowLeft } from "react-icons/fa";

const Filmes = () => {
    return (
        <div>
            <Link to="/" className="link"> <FaArrowLeft /> Voltar</Link>
            <img className='gif' src={filmeGif} alt='gif'/>

            <p className="titulo">Filmes🎥</p>
            <p className="texto1">aqui vai uma lista de filmes para te alegrar durante sua gripe:</p>

            <ul>
                <li> <a className='lista' href="https://www.max.com/br/pt/movies/se-beber-nao-case/2a8a879a-f0eb-4df4-9206-d1d641589486" rel="noopener noreferrer" target="_blank">Se beber não case</a> </li>
                <li> <a className='lista' href="https://www.max.com/br/pt/movies/projeto-x-uma-festa-fora-de-controle/71ddf936-c22a-4019-afe9-5cc8c2dad186" rel="noopener noreferrer" target="_blank">Projeto X</a> </li>
                <li> <a className='lista' href="https://www.max.com/br/pt/movies/sim-senhor/d52bdabf-7e77-4c3a-91f0-77cdebb24ae0" rel="noopener noreferrer" target="_blank">Sim senhor</a> </li>
            </ul>

            <p className="texto2">ps: se vc clicar em cada filme, vc será direcionada para seu respectivo filme na HBO</p>
        </div>
    )
}

export default Filmes;
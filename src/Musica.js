import React from "react";
import { Link } from 'react-router-dom';
import musicaGif from './images/musicaGif.gif'

import { FaArrowLeft } from "react-icons/fa";

const Musica = () =>{
    return (
        <div>
            <Link to="/" className="link"> <FaArrowLeft /> Voltar</Link>
            <img className='gif' src={musicaGif} alt='gif'/>

            <p className="titulo">Música🎵</p>
            <p className="texto1">aqui vai uma lista de playlists para vc ouvir:</p>
        
            <ul>
                <li> <a className='lista' href="https://open.spotify.com/playlist/0eduHIy1z8jOm1ogMuK9xt?si=04d2bc1ce89148fe" rel="noopener noreferrer" target="_blank">Luan Santana</a> </li>
                <li> <a className='lista' href="https://open.spotify.com/playlist/4nLdzQTYVZo9HPqhtCW47X?si=de6a0777c68e4fd7" rel="noopener noreferrer" target="_blank">Veigh</a> </li>
                <li> <a className='lista' href="https://open.spotify.com/playlist/3belVs9U1Ks4J5p06N1ZmT?si=d62073666ede4e19" rel="noopener noreferrer" target="_blank">Música de garotas brancas</a> </li>
            </ul>

            <p className="texto2">ps: se vc clicar em cada música, vc será direcionada para sua respectiva playlist no spotify</p>
        </div>
    )
}

export default Musica
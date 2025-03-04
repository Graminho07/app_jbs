import './style/Home.css';
import stitchGif from './images/stitchGif.gif';
import { Link } from 'react-router-dom';

const Home = () =>{
  return (
    <body>
      <img className='gif' src={stitchGif} alt='gif'/>
      <p className='titulo'>oi, sei q vc tá dodói, por isso fiz esse presente pra vc se sentir mlhr😁</p>

      <p className='texto1'>aqui tem uma lista de coisas para te ajudar na sua recuperação:</p>
      
      <ul>
        <li><Link className='lista' to="remedios">Remédios💊</Link></li>
        <li><Link className='lista' to="comida">Comida🍔</Link></li>
        <li><Link className='lista' to="filmes">Filmes🎥</Link></li>
        <li><Link className='lista' to="musica">Música🎵</Link></li>
        <li><Link className='lista' to="joguinhos">Joguinhos🎮</Link></li>
      </ul>
    </body>
  );
}

export default Home;
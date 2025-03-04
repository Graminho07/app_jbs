import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./Home";
import Remedios from './Remedios';
import Comida from './Comida'
import Filmes from './Filmes'
import Musica from './Musica'
import Joguinhos from './Joguinhos'

const AppRoutes = () => {
   return (
       <BrowserRouter>
           <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/remedios" element={<Remedios />} />
               <Route path="/comida" element={<Comida />}/>
               <Route path="/filmes" element={<Filmes />}/>
               <Route path="/musica" element={<Musica />}/>
               <Route path="/joguinhos" element={<Joguinhos />}/>
           </Routes>
       </BrowserRouter>
   );
}

export default AppRoutes;
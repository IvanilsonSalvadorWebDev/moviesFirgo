import './style.css';

import {listarCategorias} from './gestaoDeFilmes/listarCategorias.js';
import {listarFilmes} from './gestaoDeFilmes/listarFilmes.js';
import {filtrarFilmes} from './gestaoDeFilmes/filtrarFilmes.js';
import {navBar} from './layout/navBar.js';
import {ordenarFilmes} from './gestaoDeFilmes/ordenarFilmes.js';
import {alternarCategorias} from './gestaoDeFilmes/alternarCategorias.js';
import {pesquisarFilmes} from './gestaoDeFilmes/search/pesquisarFilmes.js';
import {filtrarFilmesPor} from './gestaoDeFilmes/search/filtrarFilmesPor.js';
import {pesquisarFilmesPorDate} from './gestaoDeFilmes/search/pesquisarFilmesPorDate.js';
import {pesquisarFilmesPorPrice} from './gestaoDeFilmes/search/pesquisarFilmesPorPrice.js';
import {verDetalhesDeFilme} from './gestaoDeFilmes/verDetalhesDeFilme.js';



const filmes = [
    {id:1, title: 'Meu filme', desc:'ese movie', price: 2000, category: 'SkyFy', anoLanc:2025},
    {id:2, title: 'Meu  outro filme', desc:'fr movie', price: 2500, category: 'Terror', anoLanc:2015},
    {id:3, title: 'A daeu  outro filme', desc:'fr movuddie', price: 4500, category: 'Action', anoLanc:2013},
    {id:4, title: 'Batman vsyy  outro filme', desc:'fr movuddie', price: 4500, category: 'Comedy', anoLanc:2018},
    {id:5, title: 'Como vsyy  outro filme', desc:'fr movuddie', price: 1500, category: 'Drama', anoLanc:2020}

];

document.querySelector('#app').innerHTML = `
        ${navBar()}
  

    <div id='tabs-container'>
    
    </div>

    <div id =''>
             <ul id='cat-container'>
             </ul>
        </div>

    <div id =''>
        <select id='select'>
            <option value ='default'>Ordenar por:</option>
            <option value ='Z-A'>Maior</option>
            <option value ='Z-A'>Menor</option>
        </select>
    </div>

    <div id='listaFilmes'></div>
    
`

document.addEventListener("DOMContentLoaded", (event) => {
    listarFilmes(filmes);
    listarCategorias(filmes);
    filtrarFilmes(filmes);
    alternarCategorias(filmes);
    ordenarFilmes(filmes);
    pesquisarFilmes(filmes);
    filtrarFilmesPor(filmes);
    pesquisarFilmesPorDate(filmes);
    pesquisarFilmesPorPrice(filmes);
    verDetalhesDeFilme(filmes);
});

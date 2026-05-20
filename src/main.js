import './style.css';
import './back.css';

import {filmes} from './data/filmes.js';

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

document.querySelector('#app').innerHTML = `
          <header>
            ${navBar()}
          </header>

   <aside id="sidebar" class="sidebar">
            <div class="logo">
              <h2>Firgos</h2>
            </div>
    <div>
    <!-- Página ativa: Ícone Preenchido (Sem o sufixo -outline) -->
    <button class="nav-item active" data-page="home">
        <ion-icon name="home"></ion-icon> <span>Home</span>
    </button>
    
    <!-- Restantes páginas: Ícones de Contorno (Com o sufixo -outline) -->
    <button class="nav-item" data-page="meus-filmes">
        <ion-icon name="film-outline"></ion-icon> <span>Meus Filmes</span>
    </button>
    
    <button class="nav-item" data-page="carrinho">
        <ion-icon name="cart"></ion-icon> <span>Carrinho</span>
    </button>
    
    <button class="nav-item" data-page="historico">
        <ion-icon name="time-outline"></ion-icon> <span>Histórico</span>
    </button>
    
    <hr>
    
    <button class="nav-item" data-page="perfil">
        <ion-icon name="person-circle-outline"></ion-icon> <span>Minha Conta</span>
    </button>
</div>


            <div class="nav-items">
                    <div id="btn-logout" class="nav-item" style="margin-top: auto; color: #ff4444;">
                        <i class="fas fa-sign-out-alt"></i>
                        <span>Sair</span>
                    </div>
                </div>
        </aside>

<main id='main'>
    <div id='listaFilmes'>
    </div>

</main>

   <footer>
   
   </footer>
   
`

document.addEventListener("DOMContentLoaded", (event) => {
    listarFilmes(filmes);
    listarCategorias(filmes);
    filtrarFilmes(filmes);
    alternarCategorias(filmes);
    ordenarFilmes(filmes);
    pesquisarFilmes(filmes, listarFilmes(filmes));
    filtrarFilmesPor(filmes);
    pesquisarFilmesPorDate(filmes);
    pesquisarFilmesPorPrice(filmes);
    verDetalhesDeFilme(filmes);
});

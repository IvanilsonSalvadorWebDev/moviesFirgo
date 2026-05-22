export function verDetalhesDeFilme(filmes){

  const containerSaberMais = document.getElementById('listaFilmes'); 

    let movieBanner = document.getElementById('movie-banner');

  
  const containerlistaFilmes = document.getElementById('main');

  containerSaberMais.addEventListener('click', function(event){
    
    movieBanner.style.display='none';

  const card = event.target.closest('#btn-saber-mais');

  let movieCardId = card.dataset.id; 
  
  console.log(typeof MoviecarId);

  const filtro = [...filmes].filter(filme => filme.id === Number(movieCardId));

  console.log(filtro);

  const mappingDetalhes = filtro.map(function(filme){

  containerlistaFilmes.innerHTML ='';

  containerlistaFilmes.innerHTML =`
  
            <div class="det-page" data-id="${filme.id}">
    <!-- Fundo gigante com desfoque -->
    <div class="det-backdrop" style="background-image: url('${filme.image}');"></div>
    <div class="det-overlay"></div>

    <!-- Conteúdo posicionado por cima do fundo -->
    <div class="det-container">
        <button class="det-btn-back">
            <ion-icon name="arrow-back-outline"></ion-icon> Voltar
        </button>

        <div class="det-content">
            <span class="det-tag-category">${filme.category}</span>
            <h1 class="det-main-title">${filme.title}</h1>
            
            <div class="det-metadata">
                <span class="det-release">Lançamento: ${filme.anoLanc}</span>
                <span class="det-price-tag">${filme.price} Kz</span>
            </div>

            <p class="det-full-desc">${filme.desc}</p>

            <div class="det-action-row">
                <button class="det-btn-buy" data-id="${filme.id}">
                    <ion-icon name="cart"></ion-icon> Adicionar ao Carrinho
                </button>
            </div>
        </div>
    </div>
</div>

`;
  
  });

  });
  }

// o Id pegar do filme
// Adicionar um Evento 
//Pegar o data-id 
//Se for igual a ao id do filme selecionar tdo apenas desse filme
//selecionar o container e Limpar o container
//input os dados detro do container



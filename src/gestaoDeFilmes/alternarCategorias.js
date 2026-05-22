export function alternarCategorias(filmes){

  const containerTab = document.getElementById('categories-item');
  const containerlistaFilmes = document.getElementById('listaFilmes');
  
  let movieBanner = document.getElementById('movie-banner');

  containerTab.addEventListener('click', function(event){

  const movieCatId = event.target.closest('#categ-item');

  let catId = movieCatId.dataset.id; 
  
      console.log(catId);

  if(catId === 'SkyFy' ){
  

    console.log(catId);
    
  const Tab = document.getElementById('categ-item');
  
    Tab.classList.add('active');

    movieBanner.style.display='none';


  const filtro = filmes.filter(filme => filme.category === 'SkyFy');

  const listaFilmes = filtro.map(function(filme){

        containerlistaFilmes.innerHTML = '';
        containerlistaFilmes.innerHTML += `
        
         <li class='card'>
    <!-- Cabeçalho do Card: Categoria e Botão Saber Mais -->
    <div class='card-top'>
        <span class='category'>${filme.category}</span>
        <button class='btn-saber-mais' data-id='${filme.id}'>Saber Mais</button>
    </div>

    <!-- Contentor da Imagem -->
    <div class='card-media'>
        <img src='${filme.image}' alt='${filme.title}'>
    </div>

    <!-- Informações Centrais -->
    <div class='card-info'>
        <h2>${filme.title}</h2>
        <p class='desc'>${filme.desc}</p>
    </div>

    <!-- Detalhes Finais: Preço e Ano -->
    <div class='card-details'>
        <span class='price'>${filme.price} Kz</span>
        <span class='year'>${filme.anoLanc}</span>
    </div>

    <!-- Botão de Compra/Carrinho -->
    <div class='card-action'>
        <button class='cartButton' data-id='${filme.id}'>
            Adicionar ao Carrinho
        </button>
    </div>
</li>

        
        `;

        });

  }else if (catId === 'Terror' ) {
  /* console.log('2');
    console.log(catId);
    console.log(this);
    
*/ const Tab = document.getElementById('categ-item');

  Tab.classList.add('active');

      movieBanner.style.display='none';

  const filtro = filmes.filter(filme => filme.category === 'Terror');

  const listaFilmes = filtro.map(function(filme){

        containerlistaFilmes.innerHTML = '';
        containerlistaFilmes.innerHTML += `
        
         <li class='card'>
    <!-- Cabeçalho do Card: Categoria e Botão Saber Mais -->
    <div class='card-top'>
        <span class='category'>${filme.category}</span>
        <button class='btn-saber-mais' data-id='${filme.id}'>Saber Mais</button>
    </div>

    <!-- Contentor da Imagem -->
    <div class='card-media'>
        <img src='${filme.image}' alt='${filme.title}'>
    </div>

    <!-- Informações Centrais -->
    <div class='card-info'>
        <h2>${filme.title}</h2>
        <p class='desc'>${filme.desc}</p>
    </div>

    <!-- Detalhes Finais: Preço e Ano -->
    <div class='card-details'>
        <span class='price'>${filme.price} Kz</span>
        <span class='year'>${filme.anoLanc}</span>
    </div>

    <!-- Botão de Compra/Carrinho -->
    <div class='card-action'>
        <button class='cartButton' data-id='${filme.id}'>
            Adicionar ao Carrinho
        </button>
    </div>
</li>

        `;

        });
  
  }else if (catId === 'Action' ) {

  const Tab = document.getElementById('categ-item');
  
  Tab.classList.add('active');

      movieBanner.style.display='none';


  const filtro = filmes.filter(filme => filme.category === 'Action');

  const listaFilmes = filtro.map(function(filme){

        containerlistaFilmes.innerHTML = '';
        containerlistaFilmes.innerHTML += `
        
        <li class='card'>
    <!-- Cabeçalho do Card: Categoria e Botão Saber Mais -->
    <div class='card-top'>
        <span class='category'>${filme.category}</span>
        <button class='btn-saber-mais' data-id='${filme.id}'>Saber Mais</button>
    </div>

    <!-- Contentor da Imagem -->
    <div class='card-media'>
        <img src='${filme.image}' alt='${filme.title}'>
    </div>

    <!-- Informações Centrais -->
    <div class='card-info'>
        <h2>${filme.title}</h2>
        <p class='desc'>${filme.desc}</p>
    </div>

    <!-- Detalhes Finais: Preço e Ano -->
    <div class='card-details'>
        <span class='price'>${filme.price} Kz</span>
        <span class='year'>${filme.anoLanc}</span>
    </div>

    <!-- Botão de Compra/Carrinho -->
    <div class='card-action'>
        <button class='cartButton' data-id='${filme.id}'>
            Adicionar ao Carrinho
        </button>
    </div>
</li>

        
        `;

        });
  
  }else if (catId === 'Comedy' ) {

  const Tab = document.getElementById('categ-item');
  
  Tab.classList.add('active');

      movieBanner.style.display='none';


  const filtro = filmes.filter(filme => filme.category === 'Comedy');

  const listaFilmes = filtro.map(function(filme){

        containerlistaFilmes.innerHTML = '';
        containerlistaFilmes.innerHTML += `
        
        <li class='card'>
    <!-- Cabeçalho do Card: Categoria e Botão Saber Mais -->
    <div class='card-top'>
        <span class='category'>${filme.category}</span>
        <button class='btn-saber-mais' data-id='${filme.id}'>Saber Mais</button>
    </div>

    <!-- Contentor da Imagem -->
    <div class='card-media'>
        <img src='${filme.image}' alt='${filme.title}'>
    </div>

    <!-- Informações Centrais -->
    <div class='card-info'>
        <h2>${filme.title}</h2>
        <p class='desc'>${filme.desc}</p>
    </div>

    <!-- Detalhes Finais: Preço e Ano -->
    <div class='card-details'>
        <span class='price'>${filme.price} Kz</span>
        <span class='year'>${filme.anoLanc}</span>
    </div>

    <!-- Botão de Compra/Carrinho -->
    <div class='card-action'>
        <button class='cartButton' data-id='${filme.id}'>
            Adicionar ao Carrinho
        </button>
    </div>
</li>

        
        `;

        });
  
  }else if (catId === 'Drama' ) {

  const filtro = filmes.filter(filme => filme.category === 'Drama');

  const Tab = document.getElementById('categ-item');

  Tab.classList.add('active');

      movieBanner.style.display='none';
  
  const listaFilmes = filtro.map(function(filme){

        containerlistaFilmes.innerHTML = '';
        containerlistaFilmes.innerHTML += `
        
         <li class='card'>
    <!-- Cabeçalho do Card: Categoria e Botão Saber Mais -->
    <div class='card-top'>
        <span class='category'>${filme.category}</span>
        <button class='btn-saber-mais' data-id='${filme.id}'>Saber Mais</button>
    </div>

    <!-- Contentor da Imagem -->
    <div class='card-media'>
        <img src='${filme.image}' alt='${filme.title}'>
    </div>

    <!-- Informações Centrais -->
    <div class='card-info'>
        <h2>${filme.title}</h2>
        <p class='desc'>${filme.desc}</p>
    </div>

    <!-- Detalhes Finais: Preço e Ano -->
    <div class='card-details'>
        <span class='price'>${filme.price} Kz</span>
        <span class='year'>${filme.anoLanc}</span>
    </div>

    <!-- Botão de Compra/Carrinho -->
    <div class='card-action'>
        <button class='cartButton' data-id='${filme.id}'>
            Adicionar ao Carrinho
        </button>
    </div>
</li>

        
        `;

        });
  
  }
  
   else{
   
   }
  
    });
}


export function ordenarFilmes(filmes){

  const select = document.getElementById('selectOrder');
  let listaFilmes = document.getElementById('listaFilmes');
  const container = document.getElementById('listaFilmes');
  select.addEventListener('change', function(event){

  const movieId  = event.target.value;

  //const getDataValue = select.value;
  console.log(movieId);

  if(movieId === 'A-Z'){
        container.innerHTML = '';

    const sortFilmes = [...filmes].reverse((a,b) => a.title.localeCompare(b.title, undefined, {sensitivity:'base'}));

    const newSort = sortFilmes;
    
    if(newSort){
    
    const mapTitulos = newSort.map(function(filme){
    container.innerHTML += '';
         container.innerHTML += `
    
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

    }else{
    }

  } else if (movieId === 'Z-A'){
  
        container.innerHTML += '';

    const sortFilmes = filmes.sort((a,b) => b.title.localeCompare(a.title));

    const newSort = sortFilmes;
    
    const mapTitulos = newSort.map(function(filme){
    
         container.innerHTML += '';

         container.innerHTML += `
    
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
  }else {

  } 

  });
}
// parte 2
// Pegar o valor do select 
// comparar se o valor for igual ao uma das opces
// Vais filtrar os filmes dessa category

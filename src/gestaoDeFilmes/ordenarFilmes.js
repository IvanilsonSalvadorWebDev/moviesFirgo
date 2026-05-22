export function ordenarFilmes(filmes){

  const select = document.getElementById('selectOrder');

  select.addEventListener('change', function(event){

  const movieId  = event.target.value;

  //const getDataValue = select.value;
  console.log(movieId);

  if(movieId === 'A-Z'){
    
    const sortFilmes = [...filmes].sort((a,b) => a.title.localeCompare(b.title, undefined, {sensitivity:'base'}));
    
    const mapTitulos = sortFilmes.map(function(filme){
    
    const container = document.getElementById('listaFilmes');

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

  } else if (movieId === 'Z-A'){
    
    const sortFilmes = filmes.sort((a,b) => b.title.localeCompare(a.title));
    
    const mapTitulos = sortFilmes.map(function(filme){
    
    const container = document.getElementById('listaFilmes');

         container.innerHTML += '';

         container.innerHTML += `
    
          <ul id='card'>
            <li>Titulo: ${filme.title}</li>
            <li>Descricao: ${filme.desc}</li>
            <li>Categoria: ${filme.category}</li>
            <li>Preco: ${filme.price}</li>
            <li>Ano de Lançamento: ${filme.anoLanc}</li>
            <button class='cat'>${filme.id}</button>
          </ul>
        
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

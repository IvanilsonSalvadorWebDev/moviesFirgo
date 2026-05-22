export function pesquisarFilmes(filmes){

  const inputSearch = document.getElementById('inputSearch');
  
  let movieBanner = document.getElementById('movie-banner');

  inputSearch.addEventListener('input', function (event){

      movieBanner.style.display='none';

  const inputSearchValue = event.target.value.toLowerCase();

  const filtrandoFilmes = [...filmes].filter(filme => filme.title.toLowerCase().includes(inputSearchValue));

  if(filtrandoFilmes){
  
  [...filtrandoFilmes].map(function(filme){
  
  const container = document.getElementById('listaFilmes');

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
  
  console.log(inputSearchValue);
  console.log(filtrandoFilmes);

  
  });

}

//Validar os campos de Input para evitar ataques Cross-Script 
//adicionar um evento de click ao input
//pegar o valor do inpt e armazenar o valor numa variavel
//Inpedir solicitacoes desnecessarias ao servidor

//Pegar o valor input
//se o inpt estiver vazio nao retornar nada
//fazer um filter no objecto filmes 
//retornar tdo que for igual ao qe vem escrito do input ou tenha partes dele
//se tiver A retornar tudo que tenha a 
// 

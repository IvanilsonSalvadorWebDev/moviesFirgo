export function pesquisarFilmesPorPrice(filmes){

  const inputPrice = document.getElementById('inputSearchByPrice');
  
  let movieBanner = document.getElementById('movie-banner');

  inputPrice.addEventListener('input', function (event){
    
    movieBanner.style.display='none';
  
  const inputSearchByPriceValue = event.target.value;


  console.log(inputSearchByPriceValue);

  const filtrandoFilmesByPrice = [...filmes].filter(filme => filme.price === Number(inputSearchByPriceValue));

  console.log(filtrandoFilmesByPrice);


  if(filtrandoFilmesByPrice){


 [...filtrandoFilmesByPrice].map(function(filme){
  
  const container = document.getElementById('listaFilmes');

  container.innerHTML = '';

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
   
   }else{}

   });

   }

export function pesquisarFilmesPorDate(filmes){

  const inputDate = document.getElementById('inputSearchByDate');

  let movieBanner = document.getElementById('movie-banner');

  inputDate.addEventListener('input', function (event){

      movieBanner.style.display='none';

  const inputSearchByDateValue = event.target.value;

  console.log(inputSearchByDateValue);

  const filtrandoFilmesByDate = [...filmes].filter(filme => filme.anoLanc === Number(inputSearchByDateValue));

  if(filtrandoFilmesByDate){

  [...filtrandoFilmesByDate].map(function(filme){
  
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

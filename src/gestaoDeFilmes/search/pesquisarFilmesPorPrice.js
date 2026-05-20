export function pesquisarFilmesPorPrice(filmes){

  const inputPrice = document.getElementById('inputSearchByPrice');

  inputPrice.addEventListener('input', function (event){
  
  const inputSearchByPriceValue = event.target.value;

  console.log(inputSearchByPriceValue);

  const filtrandoFilmesByPrice = [...filmes].filter(filme => filme.price === Number(inputSearchByPriceValue));

  console.log(filtrandoFilmesByPrice);


  if(filtrandoFilmesByPrice){

 [...filtrandoFilmesByPrice].map(function(filme){
  
  const container = document.getElementById('listaFilmes');

  container.innerHTML = '';

        container.innerHTML += `
    
          <ul id='card' data-id='${filme.id}'>
            <div id='saberMais'>
                  <button id='${filme.id}' class='cat'><ion-icon name="cart"></ion-icon></button>
                  <li>${filme.category}</li>
              </div>
              <div>
              <img src='${filme.image}' width='100%'>
              </div>
              <li><h2>${filme.title}</h2></li>  
              <li>${filme.desc}</li>
              <div id='saberMais'> <li>${filme.price}Kz</li>
              <li>Lançamento: ${filme.anoLanc}</li></div>
             
              <div id='saberMais'>
                  <button id='button'>SaberMais</button>
                  <button id='${filme.id}' class='cat button'><ion-icon name="cart"></ion-icon></button>

              </div>
            </ul>
        `;
   });
   
   }else{}

   });

   }

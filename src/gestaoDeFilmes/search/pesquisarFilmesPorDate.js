export function pesquisarFilmesPorDate(filmes){

  const inputDate = document.getElementById('inputSearchByDate');

  inputDate.addEventListener('input', function (event){
  
  const inputSearchByDateValue = event.target.value;

  console.log(inputSearchByDateValue);

  const filtrandoFilmesByDate = [...filmes].filter(filme => filme.anoLanc === Number(inputSearchByDateValue));

  if(filtrandoFilmesByDate){

  [...filtrandoFilmesByDate].map(function(filme){
  
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
              <li>${filme.title}</li>  
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


export function listarFilmes(filmes){

        const listaFilmes = [...filmes].map(function(filme){

        const container = document.getElementById('listaFilmes');

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
              <li><p>${filme.desc}</p></li>
              <div id='saberMais'> <li>${filme.price}Kz</li>
              <li>Lançamento: ${filme.anoLanc}</li></div>
             
              <div id='saberMais'>
                  <button id='button'>SaberMais</button>
                  <button id='${filme.id}' class='cat button'><ion-icon name="cart"></ion-icon></button>

              </div>
            </ul>
        
        `;
        
        });
}


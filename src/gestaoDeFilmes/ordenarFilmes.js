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

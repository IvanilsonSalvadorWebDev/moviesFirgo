export function alternarCategorias(filmes){

  const containerTab = document.getElementById('categories-item');
  const containerlistaFilmes = document.getElementById('listaFilmes');

  containerTab.addEventListener('click', function(event){

  const movieCatId = event.target.closest('#categ-item');

  let catId = movieCatId.dataset.id; 
  
      console.log(catId);

  if(catId === 'SkyFy' ){
      
    console.log(catId);
    
  const Tab = document.getElementById('categ-item');
  
  Tab.classList.add('active');

  const filtro = filmes.filter(filme => filme.category === 'SkyFy');

  const listaFilmes = filtro.map(function(filme){

        containerlistaFilmes.innerHTML = '';
        containerlistaFilmes.innerHTML += `
        
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

  }else if (catId === 'Terror' ) {
  /* console.log('2');
    console.log(catId);
    console.log(this);
    
*/ const Tab = document.getElementById('categ-item');
  Tab.classList.add('active');
  
  const filtro = filmes.filter(filme => filme.category === 'Terror');

  const listaFilmes = filtro.map(function(filme){

        containerlistaFilmes.innerHTML = '';
        containerlistaFilmes.innerHTML += `
        
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
  
  }else if (catId === 'Action' ) {

  const Tab = document.getElementById('categ-item');
  Tab.classList.add('active');

  const filtro = filmes.filter(filme => filme.category === 'Action');

  const listaFilmes = filtro.map(function(filme){

        containerlistaFilmes.innerHTML = '';
        containerlistaFilmes.innerHTML += `
        
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
  
  }else if (catId === 'Comedy' ) {

  const Tab = document.getElementById('categ-item');
  Tab.classList.add('active');

  const filtro = filmes.filter(filme => filme.category === 'Comedy');

  const listaFilmes = filtro.map(function(filme){

        containerlistaFilmes.innerHTML = '';
        containerlistaFilmes.innerHTML += `
        
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
  
  }else if (catId === 'Drama' ) {

  const filtro = filmes.filter(filme => filme.category === 'Drama');

  const Tab = document.getElementById('categ-item');
  Tab.classList.add('active');
  
  const listaFilmes = filtro.map(function(filme){

        containerlistaFilmes.innerHTML = '';
        containerlistaFilmes.innerHTML += `
        
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
  
  }
  
   else{
   
   }
  
    });
}


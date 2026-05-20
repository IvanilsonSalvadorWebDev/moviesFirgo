export function pesquisarFilmes(filmes){

  const inputSearch = document.getElementById('inputSearch');
  
  inputSearch.addEventListener('input', function (event){
  
  const inputSearchValue = event.target.value.toLowerCase();

  const filtrandoFilmes = [...filmes].filter(filme => filme.title.toLowerCase().includes(inputSearchValue));

  if(filtrandoFilmes){

  [...filtrandoFilmes].map(function(filme){
  
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

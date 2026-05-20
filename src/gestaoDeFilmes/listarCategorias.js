export function listarCategorias(filmes){

  const filtro = [...filmes].filter(filme => filme.category);

 // console.log(filtro);
  
  const listaFilmes = [...filmes].map(function(categoria){
  
  const containerTab = document.getElementById('categories-item');

  containerTab.innerHTML += `
  
  <button id='categ-item' data-id='${categoria.category}' class='cat'>${categoria.category}</button>

  `;

        });
}


//Adicionar um evento click o container
//pegar o id do elemento

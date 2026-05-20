export function filtrarFilmes(filmes){

  let container = document.getElementById('app');
  
  const tabs = document.getElementById('tabs-container');

  const containerTabs = document.createElement('div');

  console.log(containerTabs);

  //document.tabs.appendChild(containerTabs);

  const filtro = filmes.filter(filme => filme.category);

  const getDataValue = select.value;

  if(getDataValue === 'Action'){
  
  }
  
}

//Criar o elemento Tab dos filmes
// adicionar um evento click ao pai
// Ouvir o click nos filhos
// capturar o valor do item clicado
// se o valor for igual a 'todos'
//Chamar a funcao listarFilmes()
// se nao se for igual a 'Action'
//Acessar a lista de filmes e selecionar todos os filmes que corespondem a categoria 'Action'
// se nao se for igual a 'Comedy'
//Acessar a lista de filmes e selecionar todos os filmes que corespondem a categoria 'Comedy'
// se nao se for igual a 'Drama'
//Acessar a lista de filmes e selecionar todos os filmes que corespondem a categoria 'Drama'
// Pegar o container
//Limpar o container
// mapear a lista de filmes
//Exibir no container


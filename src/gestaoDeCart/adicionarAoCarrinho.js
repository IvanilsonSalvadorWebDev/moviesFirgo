export function adicionarAoCarrinho(filmes){

  const containerMovies = document.getElementById('listaFilmes');
  const containerlistaFilmes = document.getElementById('addCart'); // Use isto para atualizar a tela
  const containerDuration = document.getElementById('duration');

containerMovies.addEventListener('click', function(event) {
event.stopPropagation(); 

  const button = event.target.closest("#cartButton");
  
  if (!button) return; 

  const buttonId = button.dataset.id; 

  const filme = filmes.find(filme => filme.id === Number(buttonId));
  
  if (!filme) return;

  const listaAtual = JSON.parse(localStorage.getItem('Carrinho')) || [];

  const filmeExistente = listaAtual.find(item => item.id === filme.id);

  if (filmeExistente) {
  
    let containerDuration = document.getElementById('duration');

    let incrementarQtd = filmeExistente.qtd += 1 ;

    containerDuration.innerHTML += incrementarQtd;
    
    console.log(filmeExistente);
  } else {
    // Se é novo, adiciona ao carrinho com quantidade 1
    listaAtual.push({ ...filme, qtd: 1 });
  }

  // 5. Salva no localStorage
  localStorage.setItem('Carrinho', JSON.stringify(listaAtual));
  
  console.log(listaAtual);

  // 6. O QUE FALTA: Chamar uma função para desenhar o carrinho no HTML
  // atualizarInterfaceCarrinho(); 
  
});


}

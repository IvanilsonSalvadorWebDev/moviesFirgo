export function aumentarQtdOffCartItem(){

  const buttonAumentar = document.getElementById('cart-container');
  const container = document.getElementById('cart-content');

  container.addEventListener('click', function(event){

  //event.stopPropagation(); 

  const buttonId = buttonAumentar.dataset.id; 

  console.log(buttonId);
  
  const listaAtual = JSON.parse(localStorage.getItem('Carrinho')) || [];

  const filmeExistente = listaAtual.find(item => item.id === filme.qtd);
  
  });

}

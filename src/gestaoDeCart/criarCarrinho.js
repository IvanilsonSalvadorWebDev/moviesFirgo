export function criarCarrinho(){

  let getStorage = localStorage.getItem('Carrinho');

  if (getStorage){
  
  console.log(getStorage);

  }else{

  let cart = [];
  
  const createCart = localStorage.setItem('Carrinho', cart);
  
  console.log(getStorage);

}
  return getStorage;

}
//verificar se no localStorage existe objecto carrinho
//Se o objecto Carrinho nao existir
// criar carrinho

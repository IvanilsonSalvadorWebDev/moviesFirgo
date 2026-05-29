export function atualizarCartIconNumber(){

const getCartItens = JSON.parse(localStorage.getItem('Carrinho'));

if(getCartItens){

  const cartIcon = document.getElementById('cart-count');

  let mappingNumber = getCartItens.length;

  cartIcon.textContent = mappingNumber;

 // console.log(mappingNumber);

}else {

  console.log('Algo deu errado!');
}




}

export function listaItensDoCarrinho(){

  let getStorage = JSON.parse(localStorage.getItem('Carrinho'));
  
  const containerMovies = document.getElementById('main');

  const containerCart = document.getElementById('cart-container'); 
  
  const containerlistaFilmes = document.getElementById('user-status');

  let movieBanner = document.getElementById('movie-banner');
  
  const container = document.getElementById('listaFilmes');

  containerlistaFilmes.addEventListener('click', function(event){
  
  if (getStorage){
  
 console.log(getStorage);
 // console.log(getStorage);

 const mappingProducts = getStorage.map(function(filme){
  
    containerMovies.innerHTML = '';

    containerMovies.innerHTML += `
<div id='cart-container' class='cart-container'>
    <div class='cart-header'>
        <span>Your Cart</span>
    </div>
    <div id-'cart-content' class='cart-content'>
        <img src='${filme.image}' alt='${filme.title}'>

        <div class='cart-info'>
            <h3>${filme.title}</h3>
            <span class='category'>${filme.category}</span>
            <span id='duration' class='duration'>1</span>
        </div>

        <div id='cart-controls' class='cart-controls'>
            <button id='btn-minus' data-id='${filme.id}' class='btn-minus'>-</button>
            <span class='quantity'>${filme.qtd}</span>
            <button id='btn-plus' data-id='${filme.id}' class='btn-plus'>+</button>
        </div>

        <div class='cart-price'>
            <p>${filme.price} Kz</p>
        </div>
    </div>
        </div>
    `;
  });
 }else{

 }
});

  
 // console.log(getStorage);
  //console.log(typeof cart);





}








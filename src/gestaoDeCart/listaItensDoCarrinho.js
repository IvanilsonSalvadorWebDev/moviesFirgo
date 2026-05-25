export function criarCarrinho(){

  let getStorage = localStorage.getItem('Carrinho');
  
  const containerMovies = document.getElementById('listaFilmes'); 
  
  const containerlistaFilmes = document.getElementById('addCart');

 containerMovies.addEventListener('storage', function(event){

  const button = event.target.closest("#cartButton");

  // Accessing your data-id attribute safely
  const buttonId = button.dataset.id; 
  
  if (getStorage){
  
 // console.log(getStorage);
 // console.log(getStorage);

 const mappingProducts = getCart.map(function(filme){
  
    containerMovies.innerHTML += '';

    containerMovies.innerHTML = `
    
    <div class='cart-container'>
    <div class='cart-header'>
        <span>Your Cart</span>
    </div>

    <div class='cart-content'>
        <img src='${filme.image}' alt='${filme.title}'>

        <div class='cart-info'>
            <h3>${filme.title}</h3>
            <span class='category'>${filme.category}</span>
            <span class='duration'>1 dia</span>
        </div>

        <div class='cart-controls'>
            <button class='btn-minus'>-</button>
            <span class='quantity'>1</span>
            <button class='btn-plus'>+</button>
        </div>

        <div class='cart-price'>
            <p>${filme.price} Kz</p>
        </div>
    </div>
</div>
    `;
  });

});
  }else{
  
 // console.log(getStorage);
  //console.log(typeof cart);

}

}








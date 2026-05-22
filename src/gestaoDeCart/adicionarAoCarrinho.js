export function adicionarAoCarrinho(filmes){

// Adicionar um evento ao botao
// Receber o id o filme
//
  const containerMovies = document.getElementById('listaFilmes'); 
  const containerlistaFilmes = document.getElementById('addCart');
  
  const getCart = JSON.parse(localStorage.getItem('Carrinho'));

  containerMovies.addEventListener('click', function(event){

  const button = event.target.closest("#cartButton");

  // Accessing your data-id attribute safely
  const buttonId = button.dataset.id; 
  
  const filtroFilme = filmes.filter(filme => filme.id === Number(buttonId));

    getCart.push(filtroFilme[0]);
  
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

  console.log(typeof getCart);
  console.log(getCart);
  
});


}

export function adicionarAoCarrinho(filmes){

// Adicionar um evento ao botao
// Receber o id o filme
//

  const containerMovies = document.getElementById('listaFilmes'); 
  
  const containerlistaFilmes = document.getElementById('addCart');

  containerMovies.addEventListener('click', function(event){

  const button = event.target.closest("#cartButton");

  // Accessing your data-id attribute safely
  const buttonId = button.dataset.id; 
  
  const filtroFilme = filmes.filter(filme => filme.id === Number(buttonId));


  let cart = [];

  let storage = localStorage.setItem('Carrinho', JSON.stringify(filtroFilme));
  
  const storedMdovies =JSON.parse(localStorage.getItem('Carrinho'));
  
    const mappingProducts = storedMdovies.map(function(filme){
  
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

  console.log(storedMdovies);
  
});


}

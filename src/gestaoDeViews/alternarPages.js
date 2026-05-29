export function alternarPages(){

const sideBar = ['home', 'meus-filmes', 'carrinho', 'historico','perfil' ];

  let container = document.getElementById('sidebar');
  const containerTab = document.getElementById('categories-item');
  const containerlistaFilmes = document.getElementById('listaFilmes');
  let movieBanner = document.getElementById('movie-banner');
  const Tab = document.getElementById('sidebarLink');
  let getStorage = JSON.parse(localStorage.getItem('Carrinho'));

  const containerMain = document.getElementById('main');

  const containerMovies = document.getElementById('cart-items-list');

  const containerCart = document.getElementById('cart-container'); 
  
      container.addEventListener('click', function(event){

      const sidebarLinkId = event.target.closest('#sidebarLink');

      let sidebarLinksId = sidebarLinkId.dataset.page; 

      console.log(sidebarLinksId);

      let containerL = document.getElementById('sidebarLinks');

      if(sidebarLinksId === 'meus-filmes'){
      
      Tab.classList.add('active');
      
      containerMain.innerHTML ="Sem filmes <ion-icon id='iconCart' style='font-size:80px; color:#A3A3A3;' name='eye-off'></ion-icon>";
      
      }else if(sidebarLinksId === 'carrinho'){

      Tab.classList.add('active');

      if (getStorage){
  
 console.log(getStorage);
 // console.log(getStorage);

 const mappingProducts = getStorage.map(function(filme){
  
    containerMain.innerHTML = '';

    containerMain.innerHTML += `

 <div id='cart-container' class='cart-container'>
    <div class='cart-header'>
        <span>Your Cart</span>
    </div>
    <div class='cart-content'>
        <img src='${filme.image}' alt='${filme.title}'>

        <div class='cart-info'>
            <h3>${filme.title}</h3>
            <span class='category'>${filme.category}</span>
            <span id='duration' class='duration'>1</span>
        </div>

        <div class='cart-controls'>
            <button i class='btn-minus'>-</button>
            <span class='quantity'>${filme.qtd}</span>
            <button class='btn-plus'>+</button>
        </div>

        <div class='cart-price'>
            <p>${filme.price} Kz</p>
        </div>
    </div>
        </div>

    `;
  });
 }else{}
      }else{
      
      }

});




}

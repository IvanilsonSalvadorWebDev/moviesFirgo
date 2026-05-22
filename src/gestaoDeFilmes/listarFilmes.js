
export function listarFilmes(filmes){

        const listaFilmes = [...filmes].map(function(filme){

        const container = document.getElementById('listaFilmes');

        container.innerHTML += `
    
          <li class='card'>
    <!-- Cabeçalho do Card: Categoria e Botão Saber Mais -->
    <div class='card-top'>
        <span class='category'>${filme.category}</span>
        <button id='btn-saber-mais' class='btn-saber-mais' data-id='${filme.id}'>Saber Mais</button>
    </div>

    <!-- Contentor da Imagem -->
    <div class='card-media'>
        <img src='${filme.image}' alt='${filme.title}'>
    </div>

    <!-- Informações Centrais -->
    <div class='card-info'>
        <h2>${filme.title}</h2>
        <p class='desc'>${filme.desc}</p>
    </div>

    <!-- Detalhes Finais: Preço e Ano -->
    <div class='card-details'>
        <span class='price'>${filme.price} Kz</span>
        <span class='year'>${filme.anoLanc}</span>
    </div>

    <!-- Botão de Compra/Carrinho -->
    <div class='card-action'>
        <button id='cartButton' class='cartButton' data-id='${filme.id}'>
            Adicionar ao Carrinho
        </button>
    </div>
</li>

        
        `;
        
        });
}


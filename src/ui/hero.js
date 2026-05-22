export function hero(filmes){

return`

<li id='movie-banner' class='movie-banner'>
    <!-- Topo: Gênero e Acesso aos Detalhes -->
    <div class='movie-header-tags'>
        <span class='movie-genre'>Action</span>
        <button class='btn-view-details' data-id=''>Saber Mais</button>
    </div>

    <!-- Poster / Mídia Visual -->
    <div class='movie-poster-wrapper'>
        <img src='https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/8cde025a-223d-4879-9336-3d5f6c9d0c55/e8efbfc9-8d45-11ee-a91d-02038fb3271b?host=wbd-images.prod-vod.h264.io&partner=beamcom' alt=''>
    </div>

    <!-- Bloco de Texto Principal -->
    <div class='movie-body-content'>
        <h2 class='movie-main-title'>Mad Max: Fury Road</h2>
        <p class='movie-synopsis'>Num deserto pós-apocalíptico, uma mulher revolta-se contra um tirano com a ajuda de Max. </p>
    </div>

    <!-- Informações Comerciais e de Lançamento -->
    <div class='movie-meta-data'>
        <span class='movie-rental-price'>1500 Kz</span>
        <span class='movie-release-year'>2015</span>
    </div>

    <!-- Ação Principal: Aluguer ou Compra -->
    <div class='movie-action-footer'>
        <button class='btn-add-to-rent' data-id=''>
            Adicionar ao Carrinho <ion-icon name="cart"></ion-icon> 

        </button>
    </div>
</li>

`
}

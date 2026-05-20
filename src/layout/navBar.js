export function navBar(){
    return `

    <nav class="search-nav">
                <div class="top-bar">
                <div class="search-box">
                  <ion-icon class='search-icon' name="search-outline"></ion-icon>
                  <input type='search' id='inputSearch' Placeholder = 'Pesquisar filme!'>
                  <input type='number' min="4" max="4" style='display:none;' id='inputSearchByDate' Placeholder = 'Pesquisar filme!'>
                  <input type='number'min="4" max="4" style='display:none;' id='inputSearchByPrice' Placeholder = 'Pesquisar filme!'>
                <select id='select' class='select'>
                        <option value ='title'>Titulo: </option>
                        <option value ='ano'>Ano: </option>
                        <option value ='price'>Preço: </option>
                    </select>
                </div>
                <div class="user-status">
                    <ion-icon name="cart"></ion-icon> 
                    <span class="cart-count">0</span>
                </div>
            </div>

                <div id='categories-bar' class="categories-bar">
                  <div id='categories-item'></div>
                    <div>
                    <select id='selectOrder' class='select'>
                        <option value ='A-Z'>Maior</option>
                        <option value ='Z-A'>Menor</option>
                        <option value =''></option>
                    </select>
                        <button class="cat button" data-genre="all">Filtrar</button>
                    </div>
                </div>
            </nav>


    `
}


/*

        <nav>
          <div id='inputSelect'>
              <div class='search-container'>
                  <input type='search' id='inputSearch' Placeholder = 'Pesquisar filme!'>
                  <input type='number' min="4" max="4" style='display:none;' id='inputSearchByDate' Placeholder = 'Pesquisar filme!'>
                  <input type='number'min="4" max="4" style='display:none;' id='inputSearchByPrice' Placeholder = 'Pesquisar filme!'>
              </div>

              <select>
                  <option value ='title'>Titulo: </option>
                  <option value ='ano'>Ano: </option>
                  <option value ='price'>Preço: </option>
              </select>
          </div>       
        </nav>

*/

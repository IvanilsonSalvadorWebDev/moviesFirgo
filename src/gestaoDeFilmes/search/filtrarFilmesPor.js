

export function filtrarFilmesPor(filmes, listarFilmes){

  let select = document.getElementById('select');

  select.addEventListener('change', function(event){

  const selectId  = event.target.value;

  if (selectId === 'title'){
  
  //pegar o id 
  const inputSearch = document.getElementById('inputSearch');
  const inputPrices = document.getElementById('inputSearchByPrice');
  const inputDate = document.getElementById('inputSearchByDate');
  
  inputSearch.type='search';
  inputSearch.style.display='block';
  inputPrices.style.display='none';
  inputDate.style.display='none';
  
  }else if (selectId === 'price'){
  
  //pegar o id 
  const inputPrice = document.getElementById('inputSearchByPrice');
  const inputDate = document.getElementById('inputSearchByDate');
  
  inputPrice.type='number';
  inputPrice.style.display='block';
  inputSearch.style.display='none';
  inputDate.style.display='none';
  
  }else if (selectId === 'ano'){

  //pegar o id 
  const inputDate = document.getElementById('inputSearchByDate');
  inputDate.type='number';
  inputDate.style.display='block';

  const inputSearch = document.getElementById('inputSearch');
  inputSearch.style.display='none';
  
  const inputPrices = document.getElementById('inputSearchByPrice');
  inputPrices.style.display='none';

  }else{
  
  
  }
  
  });
  
  
}

//Pegar o id do container
//Adicionar um evento de Change
//pegar o valor do id target
//SE o valor for igual a 'title'
//esconder os inputs, date => inputSearchByDate, price => inputSearchByPrice

//SE ENTAO o valor for igual a 'price'
//esconder os inputs, search => inputSearch, date => inputSearchByDate

//SE ENTAO o valor for igual a 'date'
//esconder os inputs, search => inputSearch, price => inputSearchByPrice

//Acessar a lista de filmes
//


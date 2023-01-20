$(document).ready(function() {
  $('header button').click(() =>{
    $('form').slideDown();
  })

  $('#botao-cancelar').click(() =>{
    $('form').slideUp();
  })

  $('form').on('submit', (e) =>{
    e.preventDefault();

    const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
    const novoItem = $('<li style="display: none"></li>');

    $(`<img src="${enderecoDaNovaImagem}" />` ).appendTo(novoItem)
    $(`
      <div class="overlay-imagem-link">
        <a href="${enderecoDaNovaImagem}" title='Ver a imagem em tamanho real' target="_blank">
          Ver a imagem em tamanho real
        </a> 
      </div>
    ` ).appendTo(novoItem);

    $(novoItem).appendTo('ul')
    $(novoItem).fadeIn(1000)
    $('#endereco-imagem-nova').val('')
  })

})
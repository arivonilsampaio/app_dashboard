$(document).ready(() => {

  $('#documentacao').on('click', () => {
    $('#pagina').load('documentacao.html')

    // $.get('documentacao.html', data => {
    //   $('#pagina').html(data)
    // })

  })

  $('#suporte').on('click', () => {
    $('#pagina').load('suporte.html')

    // $.get('suporte.html', data => {
    //   $('#pagina').html(data)
    // })

  })


  // AJAX
  //ajax
  $('#competencia').on('change', e => {

    // console.log($(e.target).val())
    
    let competencia =  $(e.target).val()

    $.ajax({
      type:'GET',
      url: 'app.php',
      data: `competencia=${competencia}`,    //x-www-form-urlencode
      dataType: 'json',
      success: dados => {
        $('#mumeroVendas').html(dados.numeroVendas),
        $('#totalVendas').html(dados.totalVendas)
      },
      error: erro => {console.log(erro)}
      
    })
    
    //   //método, url, dados, sucesso, erro
    // 
  })

})
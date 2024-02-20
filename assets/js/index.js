$(() => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

  $('#enviarCorreo').on('click', ()=>{
    alert('El correo fue enviado correctamente...');
  });

  $('#ingredientes').on('dblclick', ()=>{
    $('#ingredientes').css( "color", "red" );
  });
  $('#preparacion').on('dblclick', ()=>{
    $('#preparacion').css( "color", "red" );
  });

  $('.card-title').on('click',()=>{
    $('.card-text').toggle('slow');
  });
});